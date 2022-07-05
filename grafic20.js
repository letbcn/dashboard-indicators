function grafic20() {       

    d3.csv('data/socioeconomics/patents_2005_2015.csv').then(function(data){
        patents = data;
        filtre_patents = patents;
        filtre_patents = patents.filter(element => element.nommuni == "AMB");
        pintar20();
    });
}

function pintar20() {      
    
    data_patents = filtre_patents.map(function(e) {
        return  [e["2005"],e["2006"],e["2007"],e["2008"],e["2009"],e["2010"],e["2011"],e["2012"],e["2013"],e["2014"],e["2015"]];
     });     


    const ctx = document.getElementById('myChart20').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(182,169,44,0.2)');   
    gradient.addColorStop(1, 'rgba(182,169,44,1)');
    myChart20 = new Chart(ctx, {
        
        data: {
            labels: ["2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015"],
            datasets: [
                {
                    type: 'bar',
                   // label: "Patents ",
                    data: data_patents[0],
                    backgroundColor:'rgba(182,169,44,1)',
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:"Innovació"
                },
                legend:{
                    position:'bottom',
                    align:'right' ,
                    display:false
                },
                datalabels: {
                    display:false,
                    align: 'end',
                    anchor:'end',
                    offset:-30,
                    formatter: function(value, context) {
                        return value.toFixed(2) ;
                      }
                  }
            },
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    title:{
                        display:true,
                        text:["Nombre de patents europees","per 1000 habitants"]
                    }
                    
                }
            }
        }
    });
    document.getElementById("20").style.display='block'
}
    