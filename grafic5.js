function grafic5() {       

  d3.csv('data/qualitat_aigua/estat_rius_07_12_13_18.csv').then(function(data){
      estat_rius = data;
      filtre_estat_rius= estat_rius;

      filtre_estat_12 = estat_rius.filter(element => element.nommuni == "AMB");
      filtre_estat_18 = estat_rius.filter(element => element.nommuni_1 == "AMB");
      pintar5();
  });
}

function pintar5() {       
    const ctx = document.getElementById('myChart5').getContext('2d');
    var filtre_mb_12 = filtre_estat_12.filter(element => element.e_ecologic_07_12 == "Molt bo");
    if (filtre_mb_12.length == 0){ valor_mb_12 = null } else { valor_mb_12 = filtre_mb_12[0]["%"]};
    var filtre_b_12 = filtre_estat_12.filter(element => element.e_ecologic_07_12 == "Bo");
    if (filtre_b_12.length == 0){ valor_b_12 = null } else { valor_b_12 = filtre_b_12[0]["%"]};
    var filtre_mediocre_12 = filtre_estat_12.filter(element => element.e_ecologic_07_12 == "Mediocre");
    if (filtre_mediocre_12.length == 0){ valor_mediocre_12 = null } else { valor_mediocre_12 = filtre_mediocre_12[0]["%"]};
    var filtre_deficient_12 = filtre_estat_12.filter(element => element.e_ecologic_07_12 == "Deficient");
    if (filtre_deficient_12.length == 0){ valor_deficient_12 = null } else { valor_deficient_12 = filtre_deficient_12[0]["%"]};
    var filtre_dolent_12 = filtre_estat_12.filter(element => element.e_ecologic_07_12 == "Dolent");
    if (filtre_dolent_12.length == 0){ valor_dolent_12 = null } else { valor_dolent_12 = filtre_dolent_12[0]["%"]};
    var filtre_dp_12 = filtre_estat_12.filter(element => element.e_ecologic_07_12 == "Dades Parcials");
    if (filtre_dp_12.length == 0){ valor_dp_12 = null } else { valor_dp_12 = filtre_dp_12[0]["%"]};
    var filtre_sc_12 = filtre_estat_12.filter(element => element.e_ecologic_07_12 == "Sense Controls");
    if (filtre_sc_12.length == 0){ valor_sc_12 = null } else { valor_sc_12 = filtre_sc_12[0]["%"]};
    var filtre_mb_18 = filtre_estat_18.filter(element => element.ecologic_13_18 == "Molt bo");
    if (filtre_mb_18.length == 0){ valor_mb_18 = null } else { valor_mb_18 = filtre_mb_18[0]["%_1"]};
    var filtre_b_18 = filtre_estat_18.filter(element => element.ecologic_13_18 == "Bo");
    if (filtre_b_18.length == 0){ valor_b_18 = null } else { valor_b_18 = filtre_b_18[0]["%_1"]};
    var filtre_mediocre_18 = filtre_estat_18.filter(element => element.ecologic_13_18 == "Mediocre");
    if (filtre_mediocre_18.length == 0){ valor_mediocre_18 = null } else { valor_mediocre_18 = filtre_mediocre_18[0]["%_1"]};
    var filtre_deficient_18 = filtre_estat_18.filter(element => element.ecologic_13_18 == "Deficient");
    if (filtre_deficient_18.length == 0){ valor_deficient_18 = null } else { valor_deficient_18 = filtre_deficient_18[0]["%_1"]};
    var filtre_dolent_18 = filtre_estat_18.filter(element => element.ecologic_13_18 == "Dolent");
    if (filtre_dolent_18.length == 0){ valor_dolent_18 = null } else { valor_dolent_18 = filtre_dolent_18[0]["%_1"]};
    var filtre_dp_18 = filtre_estat_18.filter(element => element.ecologic_13_18 == "Dades Parcials");
    if (filtre_dp_18.length == 0){ valor_dp_18 = null } else { valor_dp_18 = filtre_dp_18[0]["%_1"]};
    var filtre_sc_18 = filtre_estat_18.filter(element => element.ecologic_13_18 == "Sense Controls");
    if (filtre_sc_18.length == 0){ valor_sc_18 = null } else { valor_sc_18 = filtre_sc_18[0]["%_1"]};

    myChart5 = new Chart(ctx, {
        
        data: {
            labels: ['2007-2012','2012-2018'],
            datasets: [
                {
                    type: 'bar',
                   label: 'Molt bo',
                    data: [valor_mb_12,valor_mb_18],
                    backgroundColor: 'rgb(146,208,80)'
                },
                {
                  type: 'bar',
                 label: 'Bo',
                  data: [valor_b_12,valor_b_18],
                  backgroundColor: 'rgb(84,130,53)'
              },
              {
                type: 'bar',
                label: 'Mediocre',
                data: [valor_mediocre_12,valor_mediocre_18],
                backgroundColor: 'rgb(255,192,0)'
              },
              {
                type: 'bar',
                label: 'Deficient',
                data: [valor_deficient_12,valor_deficient_18],
                backgroundColor: 'rgb(255,102,0)'
              },
              {
                type: 'bar',
                label: 'Dolent',
                data: [valor_dolent_12,valor_dolent_18],
                backgroundColor: 'rgb(222,0,0)'
              },
              {
                type: 'bar',
                label: 'Dades parcials',
                data:[valor_dp_12,valor_dp_18],
                backgroundColor: 'rgb(222,235,247)'
              },
              {
                type: 'bar',
                label: 'Sense Controls',
                data: [valor_sc_12,valor_sc_18],
                backgroundColor: 'rgb(222,235,247)'
              }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Qualitat de l'aigua"
                },
                legend:{
                    position:'bottom',
                    align:'right' ,
                    display:false
                },
                datalabels: {
                    display:false,
                    align: 'end',
                    anchor: 'end',
                    formatter: function(value, context) {
                        return value +'%';
                      },
                    labels: {
                        font: {
                          weight: 'bold',
                          size:10,
                          color:'black'
                        }
                      }
                  },
                  tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
    
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y  +"%";
                            }
                            return label;
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
                      text: 'Estat ecològic dels rius (%)'
                    },
                  ticks: {
                      min: 0,
                      max: this.max,// Your absolute max value
                      callback: function (value) {
                       // return (value / this.max * 100).toFixed(0) + '%'; // convert it to percentage
                      },
                    },
              }
          }
        }
    });
    document.getElementById("5").style.display='block'
}
    