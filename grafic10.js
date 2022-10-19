function grafic10() {       

    d3.csv('data/ghg_2005_2017_municipis_ambits_1.csv').then(function(data){
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
            labels: ["2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"],
            datasets: [
                {
                    type: 'bar',
                    data: [filtre_gasos[0]['ghg_2005_t'],filtre_gasos[0]['ghg_2006_t'],filtre_gasos[0]['ghg_2007_t'],filtre_gasos[0]['ghg_2008_t'],filtre_gasos[0]['ghg_2009_t'],filtre_gasos[0]['ghg_2010_t'],filtre_gasos[0]['ghg_2011_t'],filtre_gasos[0]['ghg_2012_t'],filtre_gasos[0]['ghg_2013_t'],filtre_gasos[0]['ghg_2014_t'],filtre_gasos[0]['ghg_2015_t'],filtre_gasos[0]['ghg_2016_t'],filtre_gasos[0]['ghg_2017_t']],
                    backgroundColor: 'rgba(180, 162, 149,1)',
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Gasos d'efecte hivernacle"
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
                        text: ['Emissions GEH(tCO\u00B2)','per càpita per municipi']
                      }
                },
            }
        }
    });
    document.getElementById("10").style.display='block'
}

