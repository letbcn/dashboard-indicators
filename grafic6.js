function grafic6() {       

    d3.csv('data/consums_electrics_2013_2020_kwh.csv').then(function(data){
        electricitat = data;
        filtre_elec = electricitat;
        filtre_elec = electricitat.filter(element => element.nommuni == 'AMB');
        d3.csv('data/gas_domestic_2013_2020_kwh_pcs.csv').then(function(data){
            gas = data;
            filtre_gas = gas;
            filtre_gas = gas.filter(element => element.nommuni == 'AMB');
            class TravellerCollection extends Array {
                sum(key) {
                    return this.reduce((a, b) => a + (b[key] || 0), 0);
                }
            }
            traveler = new TravellerCollection(filtre_gas);
            pintar6();
        });
    });
} 
function pintar6(){
    const ctx = document.getElementById('myChart6').getContext('2d');
    data_gas= filtre_gas.map(function(e) {
        return  [e.domest_habitant_2013,e.domest_habitant_2014,e.domest_habitant_2015,e.domest_habitant_2016,e.domest_habitant_2017,e.domest_habitant_2018,e.domest_habitant_2019,e.domest_habitant_2020];
     });
     data_elec= filtre_elec.map(function(e) {
        return  [e.domest_habitant_2013,e.domest_habitant_2014,e.domest_habitant_2015,e.domest_habitant_2016,e.domest_habitant_2017,e.domest_habitant_2018,e.domest_habitant_2019,e.domest_habitant_2020];
    });
    
    myChart6 = new Chart(ctx, {
        
        data: {
            labels: ["2013","2014","2015","2016","2017","2018","2019","2020"],
            datasets: [
                /*{
                    type: 'bar',
                    label: "gas primari",
                    data: [],
                    backgroundColor: 'rgba(169,209,142,1)',
                },
                {
                    type: 'bar',
                    label: "Gas Industrial",
                    data: [],
                    backgroundColor: 'rgba(165,165,165,1)',
                },
                {
                    type: 'bar',
                    label: "Gas Terciari",
                    data: [],
                    backgroundColor: 'rgba(255,192,0,1)',
                },*/
                {
                    type: 'bar',
                    label: "Gas per càpita",
                    data: data_gas[0],
                    spanGaps: true,
                    backgroundColor: 'rgba(91,155,213,1)',
                },
                {
                    type: 'bar',
                    label: "Electricitat per càpita",
                    data: data_elec[0],
                    backgroundColor: 'rgba(99,99,99,1)'
                }
                /*,
                {
                    type: 'bar',
                    label: "E. primari",
                    data: [],
                    backgroundColor: 'rgba(112,173,71,1)',
                },
                {
                    type: 'bar',
                    label: "E. secundari",
                    data: [],
                    backgroundColor: 'rgba(38,68,120,1)',
                },
                {
                    type: 'bar',
                    label: "E. terciari",
                    data: [],
                    backgroundColor: 'rgba(158,72,14,1)',
                }*/

            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Consum d'energia"
                },
                legend:{
                    position:'bottom',
                    align:'right' ,
                    display:false
                },
                datalabels: {
                    //display:'auto',
                    display:false,
                    formatter: function(value, context) {
                        return Math.round(value).toFixed(2);
                      },
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
                x: {
                    stacked: true,
                    },
                    y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'kw/h'
                      }
                    },
            }
        }
    });
    document.getElementById("6").style.display='block'
}
    