
function grafic2() {       

    d3.csv('data/cobertes/cobertes_1987_2017_1.csv').then(function(data){
        cobertes = data;
        filtre_cobertes= cobertes;
        filtre_cobertes= cobertes.filter(element => element.field_1 == "AMB");
        pintar2();
    });
    
}


function pintar2() {       
    const ctx = document.getElementById('myChart2').getContext('2d');

    if (filtre_cobertes.length == 0){
        var v_boscos_87 = null;
        var v_conreus_87 = null;
        var v_matollars_87 = null;
        var v_fluvial_87 = null;
        var v_solnu_87 = null;
        var v_compacta_87 = null;
        var v_vies_87 = null
        var v_boscos_92 = null;
        var v_conreus_92 = null;
        var v_matollars_92 = null;
        var v_fluvial_92 = null;
        var v_solnu_92 = null;
        var v_compacta_92 = null;
        var v_vies_92 = null;
        var v_boscos_97 = null;
        var v_conreus_97 = null;
        var v_matollars_97 = null;
        var v_fluvial_97 = null;
        var v_solnu_97 = null;
        var v_compacta_97 = null;
        var v_vies_97 = null;
        var v_boscos_02 = null;
        var v_conreus_02 = null;
        var v_matollars_02 = null;
        var v_fluvial_02 = null;
        var v_solnu_02 = null;
        var v_compacta_02 = null;
        var v_vies_02 = null;
        var v_boscos_07 = null;
        var v_conreus_07 = null;
        var v_matollars_07 = null;
        var v_fluvial_07 = null;
        var v_solnu_07 = null;
        var v_compacta_07 = null;
        var v_vies_07 = null;
        var v_boscos_12 = null;
        var v_conreus_12 = null;
        var v_matollars_12 = null;
        var v_fluvial_12 = null;
        var v_solnu_12 = null;
        var v_compacta_12 = null;
        var v_vies_12 = null;
        var v_boscos_17 = null;
        var v_conreus_17 = null;
        var v_matollars_17 = null;
        var v_fluvial_17 = null;
        var v_solnu_17 = null;
        var v_compacta_17 = null;
        var v_vies_17 = null;
        var aigues_87=null;var vies_87=null;var urba_87=null;var bosc1_87;var bosc2_87=null;var bosc3_87=null;

    } else {
        var aigues_87 = parseFloat(filtre_cobertes[0]["1987_Aigües continentals"]);
        var urba_87 = filtre_cobertes[0]["1987_Urba"];
        var vies_87 = filtre_cobertes[0]["1987_Infraestructures viaries"];
        var matollars_87 = filtre_cobertes[0]["1987_Matollars"];
		var nodata_87 = filtre_cobertes[0]["NODATA->Sense dades"];
        var bosc1_87 = parseFloat(filtre_cobertes[0]["1987_Boscos d'esclerofil·les"]);
        var bosc2_87 = parseFloat(filtre_cobertes[0]["1987_Boscos de caducifolis"]);
        var bosc3_87 = parseFloat(filtre_cobertes[0]["1987_Boscos d'aciculifolis"]);
        var herbacis_87 = parseFloat(filtre_cobertes[0]["1987_Conreus herbacis"]);
        var llenyosos_87 =  parseFloat(filtre_cobertes[0]["1987_Conreus llenyosos"]);
        var humides_87 = parseFloat(filtre_cobertes[0]["1987_Vegetació de zones humides"]);
        var escassa_87 = parseFloat(filtre_cobertes[0]["1987_Sòls amb vegetació escassa o nul·la"]);
        var cremat_87 = parseFloat(filtre_cobertes[0]["1987_Zones cremades"]);
        var platja_87 = parseFloat(filtre_cobertes[0]["1987_Sorrals i platges"]); 
        var aigues_92 = parseFloat(filtre_cobertes[0]["1992_Aigües continentals"]);
        var urba_92 = filtre_cobertes[0]["1992_Urba"];
        var vies_92 = filtre_cobertes[0]["1992_Infraestructures viaries"];
        var matollars_92 = filtre_cobertes[0]["1992_Matollars"];
		var nodata_92 = filtre_cobertes[0]["NODATA->Sense dades"];
        var bosc1_92 = parseFloat(filtre_cobertes[0]["1992_Boscos d'esclerofil·les"]);
        var bosc2_92 = parseFloat(filtre_cobertes[0]["1992_Boscos de caducifolis"]);
        var bosc3_92 = parseFloat(filtre_cobertes[0]["1992_Boscos d'aciculifolis"]);
        var herbacis_92 = parseFloat(filtre_cobertes[0]["1992_Conreus herbacis"]);
        var llenyosos_92 =  parseFloat(filtre_cobertes[0]["1992_Conreus llenyosos"]);
        var humides_92 = parseFloat(filtre_cobertes[0]["1992_Vegetació de zones humides"]);
        var escassa_92 = parseFloat(filtre_cobertes[0]["1992_Sòls amb vegetació escassa o nul·la"]);
        var platja_92 = parseFloat(filtre_cobertes[0]["1992_Sorrals i platges"]);
        var aigues_97 = parseFloat(filtre_cobertes[0]["1997_Aigües continentals"]);
        var urba_97 = filtre_cobertes[0]["1997_Urba"];
        var vies_97 = filtre_cobertes[0]["1997_Infraestructures viaries"];
        var matollars_97 = filtre_cobertes[0]["1997_Matollars"];
		var nodata_97 = filtre_cobertes[0]["NODATA->Sense dades"];
        var bosc1_97 = parseFloat(filtre_cobertes[0]["1997_Boscos d'esclerofil·les"]);
        var bosc2_97 = parseFloat(filtre_cobertes[0]["1997_Boscos de caducifolis"]);
        var bosc3_97 = parseFloat(filtre_cobertes[0]["1997_Boscos d'aciculifolis"]);
        var herbacis_97 = parseFloat(filtre_cobertes[0]["1997_Conreus herbacis"]);
        var llenyosos_97 =  parseFloat(filtre_cobertes[0]["1997_Conreus llenyosos"]);
        var humides_97 = parseFloat(filtre_cobertes[0]["1997_Vegetació de zones humides"]);
        var escassa_97 = parseFloat(filtre_cobertes[0]["1997_Sòls amb vegetació escassa o nul·la"]);
        var cremat_97 = parseFloat(filtre_cobertes[0]["1997_Zones cremades"]);
        var platja_97 = parseFloat(filtre_cobertes[0]["1997_Sorrals i platges"]);
        var aigues_02 = parseFloat(filtre_cobertes[0]["2002_Aigües continentals"]);
        var urba_02 = filtre_cobertes[0]["2002_Urba"];
        var vies_02 = filtre_cobertes[0]["2002_Infraestructures viaries"];
        var matollars_02 = filtre_cobertes[0]["2002_Matollars"];
		var nodata_02 = filtre_cobertes[0]["NODATA->Sense dades"];
        var bosc1_02 = parseFloat(filtre_cobertes[0]["2002_Boscos d'esclerofil·les"]);
        var bosc2_02 = parseFloat(filtre_cobertes[0]["2002_Boscos de caducifolis"]);
        var bosc3_02 = parseFloat(filtre_cobertes[0]["2002_Boscos d'aciculifolis"]);
        var herbacis_02 = parseFloat(filtre_cobertes[0]["2002_Conreus herbacis"]);
        var llenyosos_02 =  parseFloat(filtre_cobertes[0]["2002_Conreus llenyosos"]);
        var humides_02 = parseFloat(filtre_cobertes[0]["2002_Vegetació de zones humides"]);
        var escassa_02 = parseFloat(filtre_cobertes[0]["2002_Sòls amb vegetació escassa o nul·la"]);
        var cremat_02 = parseFloat(filtre_cobertes[0]["2002_Zones cremades"]);
        var platja_02 = parseFloat(filtre_cobertes[0]["2002_Sorrals i platges"]);
        var aigues_07 = parseFloat(filtre_cobertes[0]["2007_Aigües continentals"]);
        var urba_07 = filtre_cobertes[0]["2007_Urba"];
        var vies_07 = filtre_cobertes[0]["2007_Infraestructures viaries"];
        var matollars_07 = filtre_cobertes[0]["2007_Matollars"];
		var nodata_07 = filtre_cobertes[0]["NODATA->Sense dades"];
        var bosc1_07 = parseFloat(filtre_cobertes[0]["2007_Boscos d'esclerofil·les"]);
        var bosc2_07 = parseFloat(filtre_cobertes[0]["2007_Boscos de caducifolis"]);
        var bosc3_07 = parseFloat(filtre_cobertes[0]["2007_Boscos d'aciculifolis"]);
        var herbacis_07 = parseFloat(filtre_cobertes[0]["2007_Conreus herbacis"]);
        var llenyosos_07 =  parseFloat(filtre_cobertes[0]["2007_Conreus llenyosos"]);
        var humides_07 = parseFloat(filtre_cobertes[0]["2007_Vegetació de zones humides"]);
        var escassa_07 = parseFloat(filtre_cobertes[0]["2007_Sòls amb vegetació escassa o nul·la"]);
        var cremat_07 = parseFloat(filtre_cobertes[0]["2007_Zones cremades"]);
        var platja_07 = parseFloat(filtre_cobertes[0]["2007_Sorrals i platges"]);
        var aigues_12 = parseFloat(filtre_cobertes[0]["2012_Aigües continentals"]);
        var urba_12 = filtre_cobertes[0]["2012_Urba"];
        var vies_12 = filtre_cobertes[0]["2012_Infraestructures viaries"];
        var matollars_12 = filtre_cobertes[0]["2012_Matollars"];
		var nodata_12 = filtre_cobertes[0]["NODATA->Sense dades"];
        var bosc1_12 = parseFloat(filtre_cobertes[0]["2012_Boscos d'esclerofil·les"]);
        var bosc2_12 = parseFloat(filtre_cobertes[0]["2012_Boscos de caducifolis"]);
        var bosc3_12 = parseFloat(filtre_cobertes[0]["2012_Boscos d'aciculifolis"]);
        var herbacis_12 = parseFloat(filtre_cobertes[0]["2012_Conreus herbacis"]);
        var llenyosos_12 =  parseFloat(filtre_cobertes[0]["2012_Conreus llenyosos"]);
        var humides_12 = parseFloat(filtre_cobertes[0]["2012_Vegetació de zones humides"]);
        var escassa_12 = parseFloat(filtre_cobertes[0]["2012_Sòls amb vegetació escassa o nul·la"]);
        var cremat_12 = parseFloat(filtre_cobertes[0]["2012_Zones cremades"]);
        var platja_12 = parseFloat(filtre_cobertes[0]["2012_Sorrals i platges"]);
        var aigues_17 = parseFloat(filtre_cobertes[0]["2017_Aigües continentals"]);
        var urba_17 = filtre_cobertes[0]["2017_Urba"];
        var vies_17 = filtre_cobertes[0]["2017_Infraestructures viaries"];
        var matollars_17 = filtre_cobertes[0]["2017_Matollars"];
		var nodata_17 = filtre_cobertes[0]["NODATA->Sense dades"];
        var bosc1_17 = parseFloat(filtre_cobertes[0]["2017_Boscos d'esclerofil·les"]);
        var bosc2_17 = parseFloat(filtre_cobertes[0]["2017_Boscos de caducifolis"]);
        var bosc3_17 = parseFloat(filtre_cobertes[0]["2017_Boscos d'aciculifolis"]);
        var herbacis_17 = parseFloat(filtre_cobertes[0]["2017_Conreus herbacis"]);
        var llenyosos_17 =  parseFloat(filtre_cobertes[0]["2017_Conreus llenyosos"]);
        var humides_17 = parseFloat(filtre_cobertes[0]["2017_Vegetació de zones humides"]);
        var escassa_17 = parseFloat(filtre_cobertes[0]["2017_Sòls amb vegetació escassa o nul·la"]);
        var cremat_17 = parseFloat(filtre_cobertes[0]["2017_Zones cremades"]);
        var platja_17 = parseFloat(filtre_cobertes[0]["2017_Sorrals i platges"]);
        /*var v_boscos_92 = parseFloat(filtre_cobertes[0]["1992_Boscos d'esclerofil·les"]) + parseFloat(filtre_cobertes[0]["1992_Boscos de caducifolis"]) + parseFloat(filtre_cobertes[0]["1992_Boscos d'aciculifolis"]);
        var v_conreus_92 = parseFloat(filtre_cobertes[0]["1992_Conreus herbacis"]) + parseFloat(filtre_cobertes[0]["1992_Conreus llenyosos"]);
        var v_matollars_92 = filtre_cobertes[0]["1992_Matollars"];
        var v_fluvial_92 = parseFloat(filtre_cobertes[0]["1992_Aigües continentals"]) + parseFloat(filtre_cobertes[0]["1992_Vegetació de zones humides"]);
        var v_solnu_92 = parseFloat(filtre_cobertes[0]["1992_Sòls amb vegetació escassa o nul·la"])  + parseFloat(filtre_cobertes[0]["1992_Sorrals i platges"]); 
        var v_compacta_92 = filtre_cobertes[0]["1992_Urba"];
        var v_vies_92 = filtre_cobertes[0]["1992_Infraestructures viaries"];
		var v_nodata_92 = filtre_cobertes[0]["NODATA->Sense dades_1"];
        var v_boscos_97 = parseFloat(filtre_cobertes[0]["1997_Boscos d'esclerofil·les"]) + parseFloat(filtre_cobertes[0]["1997_Boscos de caducifolis"]) + parseFloat(filtre_cobertes[0]["1997_Boscos d'aciculifolis"]);
        var v_conreus_97 = parseFloat(filtre_cobertes[0]["1997_Conreus herbacis"]) + parseFloat(filtre_cobertes[0]["1997_Conreus llenyosos"]);
        var v_matollars_97 = filtre_cobertes[0]["1997_Matollars"];
        var v_fluvial_97 = parseFloat(filtre_cobertes[0]["1997_Aigües continentals"]) + parseFloat(filtre_cobertes[0]["1997_Vegetació de zones humides"]);
        var v_solnu_97 = parseFloat(filtre_cobertes[0]["1997_Sòls amb vegetació escassa o nul·la"]) + parseFloat(filtre_cobertes[0]["1997_Zones cremades"]) + parseFloat(filtre_cobertes[0]["1997_Sorrals i platges"]); 
        var v_compacta_97 = filtre_cobertes[0]["1997_Urba"];
        var v_vies_97 = filtre_cobertes[0]["1997_Infraestructures viaries"];
		var v_nodata_97 = filtre_cobertes[0]["NODATA->Sense dades_2"];
        var v_boscos_02 = parseFloat(filtre_cobertes[0]["2002_Boscos d'esclerofil·les"]) + parseFloat(filtre_cobertes[0]["2002_Boscos de caducifolis"]) + parseFloat(filtre_cobertes[0]["2002_Boscos d'aciculifolis"]);
        var v_conreus_02 = parseFloat(filtre_cobertes[0]["2002_Conreus herbacis"]) + parseFloat(filtre_cobertes[0]["2002_Conreus llenyosos"]);
        var v_matollars_02 = filtre_cobertes[0]["2002_Matollars"];
        var v_fluvial_02 = parseFloat(filtre_cobertes[0]["2002_Aigües continentals"]) + parseFloat(filtre_cobertes[0]["2002_Vegetació de zones humides"]);
        var v_solnu_02 = parseFloat(filtre_cobertes[0]["2002_Sòls amb vegetació escassa o nul·la"]) + parseFloat(filtre_cobertes[0]["2002_Zones cremades"]) + parseFloat(filtre_cobertes[0]["2002_Sorrals i platges"]); 
        var v_compacta_02 = filtre_cobertes[0]["2002_Urba"];
        var v_vies_02 = filtre_cobertes[0]["2002_Infraestructures viaries"];
		var v_nodata_02 = filtre_cobertes[0]["NODATA->Sense dades_3"];
		var v_boscos_07 = parseFloat(filtre_cobertes[0]["2007_Boscos d'esclerofil·les"]) + parseFloat(filtre_cobertes[0]["2007_Boscos de caducifolis"]) + parseFloat(filtre_cobertes[0]["2007_Boscos d'aciculifolis"]);
        var v_conreus_07 = parseFloat(filtre_cobertes[0]["2007_Conreus herbacis"]) + parseFloat(filtre_cobertes[0]["2007_Conreus llenyosos"]);
        var v_matollars_07 = filtre_cobertes[0]["2007_Matollars"];
        var v_fluvial_07 = parseFloat(filtre_cobertes[0]["2007_Aigües continentals"]) + parseFloat(filtre_cobertes[0]["2007_Vegetació de zones humides"]);
        var v_solnu_07 = parseFloat(filtre_cobertes[0]["2007_Sòls amb vegetació escassa o nul·la"]) + parseFloat(filtre_cobertes[0]["2007_Zones cremades"]) + parseFloat(filtre_cobertes[0]["2007_Sorrals i platges"]); 
        var v_compacta_07 = filtre_cobertes[0]["2007_Urba"];
        var v_vies_07 = filtre_cobertes[0]["2007_Infraestructures viaries"];
		var v_nodata_07 = filtre_cobertes[0]["NODATA->Sense dades_4"];
		var v_boscos_12 = parseFloat(filtre_cobertes[0]["2012_Boscos d'esclerofil·les"]) + parseFloat(filtre_cobertes[0]["2012_Boscos de caducifolis"]) + parseFloat(filtre_cobertes[0]["2012_Boscos d'aciculifolis"]);
        var v_conreus_12 = parseFloat(filtre_cobertes[0]["2012_Conreus herbacis"]) + parseFloat(filtre_cobertes[0]["2012_Conreus llenyosos"]);
        var v_matollars_12 = filtre_cobertes[0]["2012_Matollars"];
        var v_fluvial_12 = parseFloat(filtre_cobertes[0]["2012_Aigües continentals"]) + parseFloat(filtre_cobertes[0]["2012_Vegetació de zones humides"]);
        var v_solnu_12 = parseFloat(filtre_cobertes[0]["2012_Sòls amb vegetació escassa o nul·la"]) + parseFloat(filtre_cobertes[0]["2012_Zones cremades"]) + parseFloat(filtre_cobertes[0]["2012_Sorrals i platges"]); 
        var v_compacta_12 = filtre_cobertes[0]["2012_Urba"];
        var v_vies_12 = filtre_cobertes[0]["2012_Infraestructures viaries"];
		var v_nodata_12 = filtre_cobertes[0]["NODATA->Sense dades_5"];
		var v_boscos_17 = parseFloat(filtre_cobertes[0]["2017_Boscos d'esclerofil·les"]) + parseFloat(filtre_cobertes[0]["2017_Boscos de caducifolis"]) + parseFloat(filtre_cobertes[0]["2017_Boscos d'aciculifolis"]);
        var v_conreus_17 = parseFloat(filtre_cobertes[0]["2017_Conreus herbacis"]) + parseFloat(filtre_cobertes[0]["2017_Conreus llenyosos"]);
        var v_matollars_17 = filtre_cobertes[0]["2017_Matollars"];
        var v_fluvial_17 = parseFloat(filtre_cobertes[0]["2017_Aigües continentals"]) + parseFloat(filtre_cobertes[0]["2017_Vegetació de zones humides"]);
        var v_solnu_17 = parseFloat(filtre_cobertes[0]["2017_Sòls amb vegetació escassa o nul·la"]) + parseFloat(filtre_cobertes[0]["2017_Zones cremades"]) + parseFloat(filtre_cobertes[0]["2017_Sorrals i platges"]); 
        var v_compacta_17 = filtre_cobertes[0]["2017_Urba"];
        var v_vies_17 = filtre_cobertes[0]["2017_Infraestructures viaries"];
		var v_nodata_17 = filtre_cobertes[0]["NODATA->Sense dades_6"];*/
    }

    

    myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["1987","1992","1997","2002","2007","2012","2017"],
            datasets: [
                {
                    label: 'Aigües superficials',
                    data: [aigues_87,aigues_92,aigues_97,aigues_02,aigues_07,aigues_12,aigues_17],
                    backgroundColor: 'rgba(153,247,245, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Infraestructures viàries',
                    data: [vies_87,vies_92,vies_97,vies_02,vies_07,vies_12,vies_17],
                    backgroundColor: 'rgba(209,204,176, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'urbà',
                    data: [urba_87,urba_92,urba_97,urba_02,urba_07,urba_12,urba_17],
                    backgroundColor: 'rgba(255,0,0, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Conreus herbacis',
                    data: [herbacis_87,herbacis_92,herbacis_97,herbacis_02,herbacis_07,herbacis_12,herbacis_17],
                    backgroundColor: 'rgba(65,206,0, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Conreus llenyosos',
                    data: [llenyosos_87,llenyosos_92,llenyosos_97,llenyosos_02,llenyosos_07,llenyosos_12,llenyosos_17],
                    backgroundColor: 'rgba(255,255,140, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Matollars',
                    data: [matollars_87,matollars_92,matollars_97,matollars_02,matollars_07,matollars_12,matollars_17],
                    backgroundColor: 'rgba(202,101,0, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: "Boscos d'escleròfil·les",
                    data: [bosc1_87,bosc1_92,bosc1_97,bosc1_02,bosc1_07,bosc1_12,bosc1_17],
                    backgroundColor: 'rgba(149,206,0, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Boscos de caducifolis',
                    data: [bosc2_87,bosc2_92,bosc2_97,bosc2_02,bosc2_07,bosc2_12,bosc2_17],
                    backgroundColor: 'rgba(189,255,46, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: "Boscos d'acucifolis",
                    data: [bosc3_87,bosc3_92,bosc3_97,bosc3_02,bosc3_07,bosc3_12,bosc3_17],
                    backgroundColor: 'rgba(28,156,76, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: "Vegetació de zones humides",
                    data: [humides_87,humides_92,humides_97,humides_02,humides_07,humides_12,humides_17],
                    backgroundColor: 'rgba(50,211,156, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: "Zones amb vegetació escassa o nul·la",
                    data: [escassa_87,escassa_92,escassa_97,escassa_02,escassa_07,escassa_12,escassa_17],
                    backgroundColor: 'rgba(184,201,189, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: "Zones cremades",
                    data: [cremat_87,cremat_97,cremat_02,cremat_07,cremat_12,cremat_17],
                    backgroundColor: 'rgba(109,0,0, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: "Sorrals i platges",
                    data: [platja_87,platja_92,platja_02,platja_07,platja_12,platja_17],
                    backgroundColor: 'rgba(255,255,201, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: "Sense dades",
                    data: [nodata_87,nodata_92,nodata_97,nodata_02,nodata_07,nodata_12,nodata_17],
                    backgroundColor: 'rgba(0,0,0, 1)',
                    stack: 'Stack 0'
                },
                /*{
                    label: 'Boscos',
                    data: [v_boscos_87,v_boscos_92,v_boscos_97,v_boscos_02,v_boscos_07,v_boscos_12,v_boscos_17],
                    backgroundColor: 'rgba(146,208,80, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Conreus',
                    data: [v_conreus_87,v_conreus_92,v_conreus_97,v_conreus_02, v_conreus_07,v_conreus_12,v_conreus_17],
                    backgroundColor: 'rgba(255,217,102, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Matollars',
                    data: [v_matollars_87,v_matollars_92, v_matollars_97, v_matollars_02, v_matollars_07, v_matollars_12, v_matollars_17],
                    backgroundColor: 'rgba(248,203,173, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Corredors fluvials i aiguamolls',
                    data: [v_fluvial_87, v_fluvial_92,v_fluvial_97,v_fluvial_02,v_fluvial_07,v_fluvial_12,v_fluvial_17],
                    backgroundColor: 'rgba(189,215,238, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Sòl nu',
                    data: [v_solnu_87,v_solnu_92,v_solnu_97,v_solnu_02,v_solnu_07,v_solnu_12,v_solnu_17],
                    backgroundColor: 'rgba(231,230,230, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Transport i infraestructures',
                    data: [v_vies_87,v_vies_92,v_vies_97,v_vies_02,v_vies_07,v_vies_12,v_vies_17],
                    backgroundColor: 'rgba(208,206,206, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Àrea urbana compacta',
                    data: [v_compacta_87,v_compacta_92,v_compacta_97,v_compacta_02,v_compacta_07,v_compacta_12,v_compacta_17],
                    backgroundColor: 'rgba(192,0,0, 1)',
                    stack: 'Stack 0'
                },
                {
                    label: 'Sense dades',
                    data: [v_nodata_87,v_nodata_92,v_nodata_97,v_nodata_02,v_nodata_07,v_nodata_12,v_nodata_17],
                    backgroundColor: 'rgba(255,255,255, 1)',
                    stack: 'Stack 0'
                }*/
            ]
        },
        options: {
            plugins: {
                title:{
                    display: 'true',
                    text:'Usos del sòl'
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
    