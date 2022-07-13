
function grafic2() {       

    d3.csv('data/cobertes/cobertes_1956.csv').then(function(data){
        cob56 = data;
        filtre_cob56= cob56;
        filtre_cob56 = cob56.filter(element => element.field_1 == "AMB");
        d3.csv('data/cobertes/cobertes_1993.csv').then(function(data){
            cob93 = data;
            filtre_cob93= cob93;
            filtre_cob93 = cob93.filter(element => element.field_1 == "AMB");
            d3.csv('data/cobertes/cobertes_2000.csv').then(function(data){
                cob00 = data;
                filtre_cob00= cob00;
                filtre_cob00 = cob00.filter(element => element.field_1 == "AMB");
                d3.csv('data/cobertes/cobertes_2005.csv').then(function(data){
                    cob05 = data;
                    filtre_cob05= cob05;
                    filtre_cob05 = cob05.filter(element => element.field_1 == "AMB");
                    d3.csv('data/cobertes/cobertes_2009.csv').then(function(data){
                        cob09 = data;
                        filtre_cob09= cob09;
                        filtre_cob09 = cob09.filter(element => element.field_1 == "AMB");
                        d3.csv('data/cobertes/cobertes_2015.csv').then(function(data){
                            cob15 = data;
                            filtre_cob15= cob15;
                            filtre_cob15 = cob15.filter(element => element.field_1 == "AMB");
                            pintar2();
                        });
                    });
                });
            });
        });
    });
}


function pintar2() {       
    const ctx = document.getElementById('myChart2').getContext('2d');

    if (filtre_cob56.length == 0){
        var v_boscos_56 = null;
        var v_conreus_56 = null;
        var v_matollars_56 = null;
        var v_prats_56 = null;
        var v_fluvial_56 = null;
        var v_solnu_56 = null;
        var v_difusa_56  = null;
        var v_compacta_56 = null;
        var v_vies_56 = null

    } else {
        var v_boscos_56 = parseFloat(filtre_cob56[0]["Boscos clars (no de ribera)"]) + parseFloat(filtre_cob56[0]["Boscos de ribera"]) + parseFloat(filtre_cob56[0]["Boscos densos (no de ribera)"]) +  + parseFloat(filtre_cob56[0]["Reforestacions recents"]);
        var v_conreus_56 = parseFloat(filtre_cob56[0]["Conreus"]) + parseFloat(filtre_cob56[0]["Plantacions de platans"]) + parseFloat(filtre_cob56[0]["Plantacions de pollancres"]) ;
        var v_matollars_56 = filtre_cob56[0]["Matollars"];
        var v_prats_56 = filtre_cob56[0]["Prats i herbassars"];
        var v_fluvial_56 = parseFloat(filtre_cob56[0]["Aigues continentals"]) + parseFloat(filtre_cob56[0]["Basses urbanes"]) + parseFloat(filtre_cob56[0]["Canals i basses agricoles"]) + parseFloat(filtre_cob56[0]["Vegetacio d'aiguamolls"]);
        var v_solnu_56 = parseFloat(filtre_cob56[0]["Platges"]) + parseFloat(filtre_cob56[0]["Roquissars"]) + parseFloat(filtre_cob56[0]["Sols nus forestals"]) + parseFloat(filtre_cob56[0]["Sols nus urbans"]) + parseFloat(filtre_cob56[0]["Tarteres"]) + parseFloat(filtre_cob56[0]["Zones d'extraccio minera"]); 
        var v_difusa_56 = filtre_cob56[0]["Zones esportives i ludiques"];
        var v_compacta_56 = filtre_cob56[0]["Zones urbanitzades"];
        var v_vies_56 = filtre_cob56[0]["Vies de comunicacio"];
    }

    if (filtre_cob93.length == 0){
        var v_boscos_93 = null;
        var v_conreus_93 = null;
        var v_matollars_93 = null;
        var v_prats_93 = null;
        var v_fluvial_93 = null;
        var v_solnu_93 = null;
        var v_difusa_93  = null;
        var v_compacta_93 = null;
        var v_vies_93 = null;
    } else {
        var v_boscos_93 = parseFloat(filtre_cob93[0]["Boscos clars (no de ribera)"]) + parseFloat(filtre_cob93[0]["Boscos de ribera"]) + parseFloat(filtre_cob93[0]["Boscos densos (no de ribera)"])  + parseFloat(filtre_cob93[0]["Reforestacions recents"]);
        var v_conreus_93 = parseFloat(filtre_cob93[0]["Conreus"]) ;
        var v_matollars_93 =  filtre_cob93[0]["Matollars"];
        var v_prats_93 = filtre_cob93[0]["Prats i herbassars"];
        var v_fluvial_93 =parseFloat(filtre_cob93[0]["Aigues continentals"])   + parseFloat(filtre_cob93[0]["Vegetacio d'aiguamolls"]);
        var v_solnu_93 = parseFloat(filtre_cob93[0]["Platges"]) + parseFloat(filtre_cob93[0]["Roquissars"]) + parseFloat(filtre_cob93[0]["Sols nus forestals"]) + parseFloat(filtre_cob93[0]["Tarteres"]) + parseFloat(filtre_cob93[0]["Zones d'extraccio minera"]) + parseFloat(filtre_cob93[0]["Zones recent cremades"]); 
        var v_difusa_93 = filtre_cob93[0]["Zones esportives i ludiques"];
        var v_compacta_93 = filtre_cob93[0]["Zones urbanitzades"];
        var v_vies_93 = filtre_cob93[0]["Vies de comunicacio"];
    }

    if (filtre_cob00.length == 0){
        var v_boscos_00 = null;
        var v_conreus_00 = null;
        var v_matollars_00 = null;
        var v_prats_00 = null;
        var v_fluvial_00 = null;
        var v_solnu_00 = null;
        var v_difusa_00 = null;
        var v_compacta_00 = null;
        var v_vies_00 = null;
    } else {
        var v_boscos_00 = parseFloat(filtre_cob00[0]["Boscos clars (no de ribera)"]) + parseFloat(filtre_cob00[0]["Boscos de ribera"]) + parseFloat(filtre_cob00[0]["Boscos densos (no de ribera)"]) + parseFloat(filtre_cob00[0]["Reforestacions recents"]);
        var v_conreus_00 = parseFloat(filtre_cob00[0]["Conreus"]) + parseFloat(filtre_cob00[0]["Plantacions de platans"]) + parseFloat(filtre_cob00[0]["Plantacions de pollancres"]) ;
        var v_matollars_00 =  filtre_cob00[0]["Matollars"];
        var v_prats_00 = filtre_cob00[0]["Prats i herbassars"];
        var v_fluvial_00 = parseFloat(filtre_cob00[0]["Aigues continentals"]) + parseFloat(filtre_cob00[0]["Basses urbanes"]) + parseFloat(filtre_cob00[0]["Canals i basses i agricoles"]) + parseFloat(filtre_cob00[0]["Vegetacio d'aiguamolls"]);
        var v_solnu_00 = parseFloat(filtre_cob00[0]["Platges"]) + parseFloat(filtre_cob00[0]["Roquissars"]) + parseFloat(filtre_cob00[0]["Sols nus forestals"]) + parseFloat(filtre_cob00[0]["Sols nus urbans"]) + parseFloat(filtre_cob00[0]["Tarteres"]) + parseFloat(filtre_cob00[0]["Zones d'extraccio minera"]); 
        var v_difusa_00 = filtre_cob00[0]["Zones esportives i ludiques"];
        var v_compacta_00 = filtre_cob00[0]["Zones urbanitzades"];
        var v_vies_00 = filtre_cob00[0]["Vies de comunicacio"];
    }

    if (filtre_cob05.length == 0){
        var v_boscos_05 = null;
        var v_conreus_05 = null;
        var v_matollars_05 = null;
        var v_prats_05 = null;
        var v_fluvial_05 = null;
        var  v_solnu_05 = null;
        var v_difusa_05 = null;
        var v_compacta_05 = null;
        var v_vies_05 = null;
    } else {
        var v_boscos_05 = parseFloat(filtre_cob05[0]["Boscos clars (no de ribera)"]) + parseFloat(filtre_cob05[0]["Boscos clars de ribera"]) + parseFloat(filtre_cob05[0]["Boscos densos (no de ribera)"]) + parseFloat(filtre_cob05[0]["Boscos densos de ribera"]);
        var v_conreus_05 = parseFloat(filtre_cob05[0]["Conreus"]) + parseFloat(filtre_cob05[0]["Plantacions de platans"]) + parseFloat(filtre_cob05[0]["Plantacions de pollancres"]) ;
        var v_matollars_05 =  filtre_cob05[0]["Matollars"];
        var v_prats_05 = filtre_cob05[0]["Prats i herbassars"];
        var v_fluvial_05 = parseFloat(filtre_cob05[0]["Aigues continentals"]) + parseFloat(filtre_cob05[0]["Basses urbanes"]) + parseFloat(filtre_cob05[0]["Canals i basses i agricoles"]);
        var v_solnu_05 = parseFloat(filtre_cob05[0]["Platges"]) + parseFloat(filtre_cob05[0]["Roquissars"]) + parseFloat(filtre_cob05[0]["Sols nus forestals"]) + parseFloat(filtre_cob05[0]["Sols nus urbans"]) + parseFloat(filtre_cob05[0]["Tarteres"]) + parseFloat(filtre_cob05[0]["Zones d'extraccio minera"]); 
        var v_difusa_05 = filtre_cob05[0]["Zones esportives i ludiques"];
        var v_compacta_05 = filtre_cob05[0]["Zones urbanitzades"];
        var v_vies_05 = filtre_cob05[0]["Vies de comunicacio"];
    }

    if (filtre_cob09.length == 0){
        var v_boscos_09 = null;
        var v_conreus_09 = null;
        var v_matollars_09 = null;
        var v_prats_09 = null;
        var v_fluvial_09 = null;
        var v_solnu_09 = null;
        var v_difusa_09 = null;
        var v_compacta_09 = null;
        var v_vies_09 = null;
    } else {
        var v_boscos_09 = parseFloat(filtre_cob09[0]["Boscos clars (no de ribera)"]) + parseFloat(filtre_cob09[0]["Boscos clars de ribera"]) + parseFloat(filtre_cob09[0]["Boscos densos (no de ribera)"])  + parseFloat(filtre_cob09[0]["Boscos densos de ribera"]); 
        var v_conreus_09 = parseFloat(filtre_cob09[0]["Conreus"]) + parseFloat(filtre_cob09[0]["Plantacions de platans"]) + parseFloat(filtre_cob09[0]["Plantacions de pollancres"]) ;
        var v_matollars_09 =  filtre_cob09[0]["Matollars"];
        var v_prats_09 = filtre_cob09[0]["Prats i herbassars"];
        var v_fluvial_09 = parseFloat(filtre_cob09[0]["Aigues continentals"]) + parseFloat(filtre_cob09[0]["Basses urbanes"]) + parseFloat(filtre_cob09[0]["Canals i basses i agricoles"]);
        var v_solnu_09 = parseFloat(filtre_cob09[0]["Platges"]) + parseFloat(filtre_cob09[0]["Roquissars"]) + parseFloat(filtre_cob09[0]["Sols nus forestals"]) + parseFloat(filtre_cob09[0]["Sols nus urbans"]) + parseFloat(filtre_cob09[0]["Tarteres"]) + parseFloat(filtre_cob09[0]["Zones d'extraccio minera"]); 
        var v_difusa_09 = filtre_cob09[0]["Zones esportives i ludiques"];
        var v_compacta_09 = filtre_cob09[0]["Zones urbanitzades"];
        var v_vies_09 = filtre_cob09[0]["Vies de comunicacio"];
    }

    if (filtre_cob15.length == 0){
        var v_boscos_15 = null;
        var v_conreus_15 = null;
        var v_matollars_15 = null;
        var v_prats_15 = null;
        var v_fluvial_15 = null;
        var v_solnu_15 = null;
        var v_difusa_15 = null;
        var v_compacta_15 = null;
        var v_vies_15 = null;
    } else {
        var v_boscos_15 = parseFloat(filtre_cob15[0]["Boscos clars (no de ribera)"]) + parseFloat(filtre_cob15[0]["Boscos clars de ribera"]) + parseFloat(filtre_cob15[0]["Boscos densos (no de ribera)"]) + parseFloat(filtre_cob15[0]["Boscos densos de ribera"]);
        var v_conreus_15 = parseFloat(filtre_cob15[0]["Conreus"]) + parseFloat(filtre_cob15[0]["Plantacions de platans"]) + parseFloat(filtre_cob15[0]["Plantacions de pollancres"]) ;
        var v_matollars_15 =  filtre_cob15[0]["Matollars"];
        var v_prats_15 = filtre_cob15[0]["Prats i herbassars"];
        var v_fluvial_15 = parseFloat(filtre_cob15[0]["Aigues continentals"]) + parseFloat(filtre_cob15[0]["Basses urbanes"]) + parseFloat(filtre_cob15[0]["Canals i basses i agricoles"]) ;
        var v_solnu_15 = parseFloat(filtre_cob15[0]["Platges"]) + parseFloat(filtre_cob15[0]["Roquissars"]) + parseFloat(filtre_cob15[0]["Sols nus forestals"]) + parseFloat(filtre_cob15[0]["Sols nus urbans"]) + parseFloat(filtre_cob15[0]["Tarteres"]) + parseFloat(filtre_cob15[0]["Zones d'extraccio minera"]); 
        var v_difusa_15 = filtre_cob15[0]["Zones esportives i ludiques"];
        var v_compacta_15 = filtre_cob15[0]["Zones urbanitzades"];
        var v_vies_15 = filtre_cob15[0]["Vies de comunicacio"];
    }

    myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["1956","1993","2000","2005","2009","2015"],
            datasets: [
                {
                    label: 'Boscos',
                    data: [v_boscos_56,v_boscos_93,v_boscos_00,v_boscos_05,v_boscos_09,v_boscos_15],
                    backgroundColor: 'rgba(146,208,80, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Conreus',
                    data: [v_conreus_56,v_conreus_93,v_conreus_00,v_conreus_05, v_conreus_09,v_conreus_15],
                    backgroundColor: 'rgba(255,217,102, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Matollars',
                    data: [v_matollars_56,v_matollars_93, v_matollars_00, v_matollars_05, v_matollars_09, v_matollars_15],
                    backgroundColor: 'rgba(248,203,173, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Corredors fluvials i aiguamolls',
                    data: [v_fluvial_56, v_fluvial_93,v_fluvial_00,v_fluvial_05,v_fluvial_09,v_fluvial_15],
                    backgroundColor: 'rgba(189,215,238, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Prats',
                    data: [v_prats_56,v_prats_93,v_prats_00,v_prats_05,v_prats_09,v_prats_15],
                    backgroundColor: 'rgba(197,224,180, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Parcs Urbans',
                    data: [],
                    backgroundColor: 'rgba(197,224,180, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Sòl nu',
                    data: [v_solnu_56,v_solnu_93,v_solnu_00,v_solnu_05,v_solnu_09,v_solnu_15],
                    backgroundColor: 'rgba(231,230,230, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Transport i infraestructures',
                    data: [v_vies_56,v_vies_93,v_vies_00,v_vies_05,v_vies_09,v_vies_15],
                    backgroundColor: 'rgba(208,206,206, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Àrea urbana compacta',
                    data: [v_compacta_56,v_compacta_93,v_compacta_00,v_compacta_05,v_compacta_09,v_compacta_15],
                    backgroundColor: 'rgba(192,0,0, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Àrea urbana difosa',
                    data: [v_difusa_56,v_difusa_93,v_difusa_00,v_difusa_05,v_difusa_09,v_difusa_15],
                    backgroundColor: 'rgba(255,124,128, 1)',
                    stack: 'Stack 0'
                }
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:'Cobertes del sòl'
                },
                legend:{
                    position:'bottom',
                    align:'right',
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
                        text: 'Superfície (%)'
                      },
                    min:0,
                    max:100
                }
            }
        }
    });
//});
document.getElementById("2").style.display='block'
}
    