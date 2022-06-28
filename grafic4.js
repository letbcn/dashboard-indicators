function grafic4() {       

    d3.csv('data/funcionalitat_paisatge/ice_56_15.csv').then(function(data){
        ice = data;
        filtre_ice = ice;
        filtre_ice = ice.filter(element => element.nommuni == "AMB");
        pintar4();
    });
}

function pintar4() {       
    const ctx = document.getElementById('myChart4').getContext('2d');
  
    data_ice= filtre_ice.map(function(e) {
        return  [e.ice56_mean,e.ice93_mean,e.ice09_mean,e.ice15_mean];
     });

    myChart4 = new Chart(ctx, {
        
        data: {
            labels: ["1956","1993","2009","2015"],
            datasets: [
                {
                    type: 'bar',
                    data: data_ice[0],
                    backgroundColor: 'rgba(112,173,71,1)',
                },
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:'Funcionalitat del paisatge'
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
                        text: 'Índex de Connectivitat Ecològica',
                        fontStyle: 'bold'
                      }
                },
               
            }
        }
    });
    document.getElementById("4").style.display='block'
}
    