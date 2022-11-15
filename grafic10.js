function grafic10() {       

    d3.csv('data/emissions_co2_municipixsector_dades_v2.csv').then(function(data){
        gasos = data;
        filtre_gasos = gasos;
        filtre_gasos= filtre_gasos.filter(element => element.nommuni == "AMB");
        pintar10();
        }); 
}


function pintar10(){
    const ctx = document.getElementById('myChart10').getContext('2d');
    myChart10 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],
            datasets: [
                {
                    type: 'bar',
                    data: [filtre_gasos[0]['totals_capita_2005'],filtre_gasos[0]['totals_capita_2006'],filtre_gasos[0]['totals_capita_2007'],filtre_gasos[0]['totals_capita_2008'],filtre_gasos[0]['totals_capita_2009'],filtre_gasos[0]['totals_capita_2010'],filtre_gasos[0]['totals_capita_2011'],filtre_gasos[0]['totals_capita_2012'],filtre_gasos[0]['totals_capita_2013'],filtre_gasos[0]['totals_capita_2014'],filtre_gasos[0]['totals_capita_2015'],filtre_gasos[0]['totals_capita_2016'],filtre_gasos[0]['totals_capita_2017'],filtre_gasos[0]['totals_capita_2018'],filtre_gasos[0]['totals_capita_2019'],filtre_gasos[0]['totals_capita_2020']],
                    backgroundColor: 'rgba(180, 162, 149,1)',
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:titol10
                },
                legend:{
                    position:'bottom',
                    align:'right',
                    display:false       
                }
            },
            
            scales: {
                y: {
                    title: {
                        display: true,
                        text: [escala10a,escala10b]
                      }
                },
            }
        }
    });
    document.getElementById("10").style.display='block'
}

