function grafic16() {       

    d3.csv('data/socioeconomics/extrangers_2000_2020.csv').then(function(data){
        immigra = data;
        filtre_immigra = immigra;
        filtre_immigra = immigra.filter(element => element["municipi %"] == "AMB");
        pintar16();
    });
}

function pintar16() {      
    
    data_immigra = filtre_immigra.map(function(e) {
        return  [e["2000"],e["2005"],e["2010"],e["2015"],e["2020"]];
     });
       const ctx = document.getElementById('myChart16').getContext('2d');
    myChart16 = new Chart(ctx, {
        
        data: {
            labels: ["2000","2005","2010","2015","2020"],
            datasets: [
                {
                    type: 'bar',
                    data: data_immigra[0],
                    backgroundColor: 'rgba(95,95,95,1)',
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Immigració"
                },
                legend:{
                    position:'bottom',
                    align:'right' ,
                    display:false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
    
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y.toFixed(2) +"%";;
                            }
                            return label;
                        }
                    }
                },
                datalabels: {
                    display:false,
                   align: 'top',
                    anchor:'end',
                    clamp:true,
                    formatter: function(value, context) {
                        return Math.round(value) +"%";
                      },
                    color:'rgba(95,95,95,1)'
                  }
            },
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    title:{
                        display:true,
                        text:["Població procedent de","països en desenvolupament(%)"]
                    }
                    
                }
            }
        }
    });
    document.getElementById("16").style.display='block'
}
    