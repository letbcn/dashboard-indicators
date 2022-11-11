function grafic1() {       

    d3.csv('data/variabilitat_climatiques/anom_temp_17_21.csv').then(function(data){
        temp = data;
        filtre_temp= temp;
        filtre_temp = temp.filter(element => element.nommuni == "AMB");
        d3.csv('data/variabilitat_climatiques/anom_ppt_17_21.csv').then(function(data){
            ppt = data;
            filtre_ppt= ppt;
            filtre_ppt = ppt.filter(element => element.nommuni == "AMB");
            pintar1();
        });
    });
}


function pintar1() {       
    const ctx = document.getElementById('myChart1').getContext('2d');
    data_temp = filtre_temp.map(function(e) {
        return  [e.anomtemp2017_mean,e.anomtemp2018_mean,e.anomtemp2019_mean,e.anomtemp2020_mean,e.anomtemp2021_mean];
     });
     data_ppt = filtre_ppt.map(function (e) {
        return [e["2017_mean"],e["2018_mean"],e["2019_mean"],e["2020_mean"],e["2021_mean"]];
     });

    myChart1 = new Chart(ctx, {
        
        data: {
            labels: ["2017","2018","2019","2020","2021"],
            datasets: [
                
                {
                    type: 'line',
                    label: atemp,
                    yAxisID: 'B',
                    data: data_temp[0],
                    borderColor: 'rgba(75, 192, 192,0)',
                    pointRadius:5,
                    pointBackgroundColor:'rgb(255,0,0)'
                    
                },
                {
                    type: 'bar',
                    label: aprec,
                    yAxisID: 'A',
                    data: data_ppt[0],
                    backgroundColor: 'rgba(68,114,196, 1)',
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
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:titol1
                },
                legend:{
                    position:'bottom',
                    align:'right', 
                    display:false      
                },
                
            },
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: [aprec, varper]
                      }
                },
                B: {
                    type: 'linear',
                    position: 'right',
                    title: {
                        display: true,
                        text: [atemp,varper]
                      }
                },
            }
        }
    });
//});
document.getElementById("1").style.display='block';
}
    