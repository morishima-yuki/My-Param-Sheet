
new Vue(
    {
        el: ".md-content",
        data:function(){
            let items = ""
            return {
                values:[
                    "",//1
                    "",//2
                    "",//3
                    "",//4
                    "",//5
                    "",//6
                    "",//7
                    "",//8
                    "",//9
                    "",//10
                    "",//11
                    "",//12
                    "",//13
                    "",//14
                ],
            }
        },
        methods: {
            sampleMethods: function(e){
                this.sample001 = e.target.value; 
            }
        },
        components:{
            'break-before':{
                // 利用例：<break-before></break-before>
                template:`
                <div style="break-before: page;"></div>
                `
            },
            'break-after':{
                // 利用例：<break-after></break-after>
                template:`
                <div style="break-after: page;"></div>
                `
            },
        }
    }
);
