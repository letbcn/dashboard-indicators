function grafic9() {       

    d3.csv('data/contaminacio_atmosferica/no2_2021_2015.csv').then(function(data){
        no2 = data;
        filtre_no2 = no2;
        filtre_no2 = no2.filter(element => element.nommuni == "AMB");
        d3.csv('data/contaminacio_atmosferica/pm10_2021__2015.csv').then(function(data){
            pm10 = data;
            filtre_pm10= pm10;
            filtre_pm10 = pm10.filter(element => element.nommuni == "AMB");
        pintar9();
        }); 
    });
}

function pintar9() {       
    const ctx = document.getElementById('myChart9').getContext('2d');
    if (filtre_pm10.length == 0){ 
        valor_pm10_15 = null;
        valor_pm10_16 = null;
        valor_pm10_17 = null;
        valor_pm10_18 = null;
        valor_pm10_19 = null;
        valor_pm10_20 = null;
        valor_pm10_21 = null;
    } else { 
        valor_pm10_15 = filtre_pm10[0]['2015'];
        valor_pm10_16 = filtre_pm10[0]['2016'];
        valor_pm10_17 = filtre_pm10[0]['2017'];
        valor_pm10_18 = filtre_pm10[0]['2018'];
        valor_pm10_19 = filtre_pm10[0]['2019'];
        valor_pm10_20 = filtre_pm10[0]['2020'];
        valor_pm10_21 = filtre_pm10[0]['2021']
    };

    if (filtre_no2.length == 0){ 
        valor_no2_15 = null;
        valor_no2_16 = null;
        valor_no2_17 = null;
        valor_no2_18 = null;
        valor_no2_19 = null;
        valor_no2_20 = null;
        valor_no2_21 = null;
    } else { 
        valor_no2_15 = filtre_no2[0]['2015'];
        valor_no2_16 = filtre_no2[0]['2016'];
        valor_no2_17 = filtre_no2[0]['2017'];
        valor_no2_18 = filtre_no2[0]['2018'];
        valor_no2_19 = filtre_no2[0]['2019'];
        valor_no2_20 = filtre_no2[0]['2020'];
        valor_no2_21 = filtre_no2[0]['2021']
    };

    myChart9= new Chart(ctx, {
        
        data: {
            labels: ["2015","2016","2017","2018","2019","2020","2021"],
            datasets: [
                {
                    type: 'bar',
                    label: "pm10",
                    data:  [valor_pm10_15,valor_pm10_16,valor_pm10_17,valor_pm10_18,valor_pm10_19,valor_pm10_20,valor_pm10_21],
                    backgroundColor: 'rgba(95,95,95,1)',
                },
               /* {
                    type: 'bar',
                    label: " pm\u00B2\u00B7\u2075",
                    data: data_pm25,
                    backgroundColor: 'rgba(137,137,137,1)',
                },*/
                {
                    type: 'bar',
                    label: "NO\u2082",
                    data:  [valor_no2_15,valor_no2_16,valor_no2_17,valor_no2_18,valor_no2_19,valor_no2_20,valor_no2_21],
                    backgroundColor: 'rgba(179,179,179,1)',
                },
                
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:'Contaminació atmosfèrica'
                },
                legend:{
                    position:'bottom',
                    align:'right' ,
                    display:false
                },
            },
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Emission de pm10 i NO\u2082 (ppm)'
                      }
                }
            }
        }
    });
    document.getElementById("9").style.display='block'
}
    