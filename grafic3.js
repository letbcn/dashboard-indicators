function grafic3() {       

    d3.csv('data/incendis/incendis_86_21.csv').then(function(data){
        incendis = data;
        filtre_incendis = incendis;
        filtre_incendis = incendis.filter(element => element.nommuni == "AMB");
        pintar3();
    });
}

function pintar3(workbook) {       
    const ctx = document.getElementById('myChart3').getContext('2d');
    myChart3 = new Chart(ctx, {
        
        data: {
            datasets: [
                {
                    type: 'bar',
                    data: filtre_incendis[0],
                    backgroundColor: 'rgba(192,0,0,1)',
                },
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:'Incendis forestals'
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
                                label += context.parsed.y.toFixed(3) +" ha.";;
                            }
                            return label;
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
                        text: 'Superfície cremada (hectàrees)'
                      }
                },
            }
        }
    });
    document.getElementById("3").style.display='block'
}
    