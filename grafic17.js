function grafic17() {       

    d3.csv('data/socioeconomics/ist_2019_2015.csv').then(function(data){
        ist = data;
        filtre_ist = ist;
        filtre_ist = ist.filter(element => element.municipi == "AMB");
        pintar17();
    });
}

function pintar17() {      
    
    data_ist = filtre_ist.map(function(e) {
        return  [e["2015"],e["2016"],e["2017"],e["2018"],e["2019"]];
     });

    const ctx = document.getElementById('myChart17').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(112,173,71,1)');   
    gradient.addColorStop(1, 'rgba(94,145,60,1)');

    myChart17 = new Chart(ctx, {
        
        data: {
            labels: ["2015","2016","2017","2018","2019"],
            datasets: [
                {
                    type: 'bar',
                    data: data_ist[0],
                    backgroundColor: 'rgba(112,173,71,1)'
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Nivell Socioeconòmic"
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
                        //return Math.round(value) ;
                      }
                  }
            },
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    title:{
                        display:true,
                        text:['Índex Socioeconòmic Territorial','(respecte al total de Catalunya)']
                    },
                    suggestedMin: 80,
                    beginAtZero:false
                    
                    
                }
            }
        }
    });
    /*ctx.shadowColor = 'rgb(192,192,192)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;      */ 
    document.getElementById("17").style.display='block'
}
    