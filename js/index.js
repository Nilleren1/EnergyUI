const baseUrl = "https://localhost:44364/api/Energy"

Vue.createApp({
    data() {
        return {
            data: [],
            
            addData: { id: 0, energyMetric: null, Value: 0 },
            addMessage: "",
        }
    },
    created(){
        this.getAllData()
    },

    methods: {
        

        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url)
                this.data = await response.data
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },
        
        getAllData(value) {
            var url = baseUrl;
            if (value == "calorie") 
            {
                url = baseUrl + "?value=calorie"
            }
            if (value == "joule") 
            {
                url = baseUrl + "?value=joule"
            }
            
            this.helperGetAndShow(url)
        },

        async add() {
            try {
                response = await axios.post(baseUrl, this.addData)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.getAllData()
            } catch (ex) {
                alert(ex.message)
            }
        },



    }
}).mount("#app")