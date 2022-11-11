function grafic8() {       

    d3.csv('data/residus_municipals_capita_15_20.csv').then(function(data){
        residus = data;
        filtre_residus = residus;
        filtre_residus = residus.filter(element => element.nommuni == "AMB");
        pintar8();
        });
} 

function pintar8(){
    const ctx = document.getElementById('myChart8').getContext('2d');
   myChart8 = new Chart(ctx, {
        
        data: {
            labels: ["2015","2016","2017","2018","2019","2020"],
            datasets: [
                {
                    type: 'bar',
                   // label: "kg per persona i dia",
                    data: [filtre_residus[0]['2015'],filtre_residus[0]['2016'],filtre_residus[0]['2017'],filtre_residus[0]['2018'],filtre_residus[0]['2019'],filtre_residus[0]['2020']],
                    backgroundColor: 'rgba(191,143,35,1)',
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:titol8
                },
                legend:{
                    position:'bottom',
                    align:'right' ,
                    display:false
                },
                datalabels: {
                    display:false,
                    labels: {
                      title: {
                        font: {
                          weight: 'bold',
                          color:'white'
                        }
                      }
                    }
                  }
            },
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: escala8
                      }
                }
            }
        }
    });
    document.getElementById("8").style.display='block'
}
    