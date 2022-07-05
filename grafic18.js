function grafic18() {       

    d3.csv('data/socioeconomics/demanda_habitatge_2012_2020.csv').then(function(data){
        hab = data;
        filtre_hab = hab;
        filtre_hab = hab.filter(element => element.nommuni == "AMB");
        pintar18();
    });
}

function pintar18() {      
    
    data_hab = filtre_hab.map(function(e) {
        return  [e.hab_2012,e.hab_2013,e.hab_2014,e.hab_2015,e.hab_2016,e.hab_2017,e.hab_2018,e.hab_2019,e.hab_2020];
     });


    const ctx = document.getElementById('myChart18').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(255,192,0,1)');   
    gradient.addColorStop(1, 'rgba(214,161,0,1)');
    myChart18 = new Chart(ctx, {
        
        data: {
            labels: ["2012","2013","2014","2015","2016","2017","2018","2019"],
            datasets: [
                {
                    type: 'bar',
                    data: data_hab[0],
                    backgroundColor: 'rgba(255,192,0,1)'                    
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Habitatge"
                },
                legend:{
                    position:'bottom',
                    align:'right' ,
                    display:false
                },
                datalabels: {
                    display:false,
                    align: 'end',
                    anchor:'end',
                    offset:-30,
                    formatter: function(value, context) {
                        return Math.round(value) ;
                      }
                  }
            },
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    title:{
                        display:true,
                        text:["Demanda d'habitatge protegit","per 1000 habitants"]
                    }
                    
                }
            }
        }
    });
    document.getElementById("18").style.display='block'
}
    