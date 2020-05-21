//variables for chart stats
  //Biology 
    //microbio
    var Mbio;
    //anatomy
    var Anat;
    //neurobiology
    var Nbio;
    //systems biology
    var Sbio;
    //bioengineering
    var BioE;
    var BioP = pscore(Mbio,Anat,Nbio,Sbio,BioE);
  //Genetics
    //behavioural genetics
    var Bgen;
    //genetic engineering
    var GenE;
    //genomics
    var Geno;
    //molecular genetics
    var Mgen; 
    //classical genetics
    var Cgen;
    var GenP = pscore(Bgen, GenE, Geno, Mgen, Cgen);
  //Chemistry
    //organic chemistry
    var Oche;
    //neurochemistry
    var Nche;
    //molecular chemisty
    var Mche;
    //chemical engineering
    var CheE;
    //biochemistry
    var Bche;
    var CheP = pscore(Oche, Nche, Mche, CheE, Bche);
  //Computational
    //software maintence
    var Smai;
    //computer science
    var Csci;
    //bioinformatics
    var BioI;
    //programming
    var Prog;
    //software construction
    var Scon;
    var ComP = pscore(Smai, Csci, BioI, Sdes, Scon);
  //Electrical Engineering
    //power
    var Powe;
    //basic circuitry
    var BCir;
    //electronic engineering
    var Eeng;
    //computer engineering
    var Ceng;
    //control
    var Cont;
    var EleP = pscore(Powe, BCir, Eeng, Ceng, Cont);
  //Design
    //UI&UX design
    var Udes;
    //ergonomic design
    var Edes;
    //Interaction design
    var Ides;
    //biodesign
    var Bdes;
    //systems design
    var Sdes;
    var DesP = pscore(Udes, Edes, Ides, Bdes, Sdes);

//variable for hex button postions  
  var biobuttonX = window.screen.width*0.65975;
  var biobuttonY = window.screen.height*0.115;
  var biobuttonW = 75;
  var biobuttonH = 25;
  var CbuttonX = window.screen.width*0.6597222222;
  var CbuttonY = window.screen.height*0.38888888888;
  var CbuttonW = 50;
  var CbuttonH = 50;
  var ggbuttonX = window.screen.width*0.79861111111;
  var ggbuttonY = window.screen.height*.25;
  var ggbuttonW = 100;
  var ggbuttonH = 25;
  var ChbuttonX = window.screen.width*0.79861111111;
  var ChbuttonY = window.screen.height*0.55555555555;
  var ChbuttonW = 75;
  var ChbuttonH = 25;
  var EEbuttonX = window.screen.width*0.6597222222;
  var EEbuttonY = window.screen.height*(2/3);
  var EEbuttonW = 75;
  var EEbuttonH = 50;
  var CompbuttonX = window.screen.width*0.48611111111;
  var CompbuttonY = window.screen.height*0.55555555555;
  var CompbuttonW = 75;
  var CompbuttonH = 75;
  var DesbuttonX = window.screen.width*0.487;
  var DesbuttonY = window.screen.height*0.23;
  var DesbuttonW = 75;
  var DesbuttonH = 75;

//penta buttons
    
    //biopenta

      //microbiology

        micrx = window.screen.width*0.65975;
        micry = window.screen.height*0.115;
        micrw = 75;
        micrh = 25;
      
      //anatomy

        anatx = window.screen.width*0.825;
        anaty = window.screen.height*0.2888;
        anatw = 50; 
        anath = 50;
      
      //neurobiology

        neurx = window.screen.width*.7695;
        neury = window.screen.height*0.625;
        neurw = 50;
        neurh = 50;

      //systems biolgy

        sbiox = window.screen.width*0.55;
        sbioy = window.screen.height*0.625;
        sbiow = 50;
        sbioh = 50;
      
      //bioengineering

        bioex = window.screen.width*0.4945;
        bioey = window.screen.height*0.2888;
        bioew = 75;
        bioeh = 50;

    //GGpenta

      //Behavioural Genetics

        bgenx = window.screen.width*0.65975;
        bgeny = window.screen.height*0.115;
        bgenw = 75;
        bgenh = 25;

      //Genetic Egineering

        Genex = window.screen.width*0.825;
        Geney = window.screen.height*0.2888 ;
        Genew = 50; 
        Geneh = 50;

      //Genomics

        genox = window.screen.width*.7695;
        genoy = window.screen.height*0.625 ;
        genow = 50;
        genoh = 50;

      //Molecular Genetics

        molgx = window.screen.width*0.55;
        molgy = window.screen.height*0.625;
        molgw = 50;
        molgh = 50;

      //Classical Genetics

        cgenx = window.screen.width*0.4945;
        cgeny = window.screen.height*0.2888;
        cgenw = 75;
        cgenh = 50;

    //Chemistry Penta

      //Organic chemistry

        ochex = window.screen.width*0.65975;
        ochey = window.screen.height*0.115;
        ochew = 75;
        ocheh = 25;

      //Neurochemistry

        neucx = window.screen.width*0.825;
        neucy = window.screen.height*0.2888 ;
        neucw = 50; 
        neuch = 50;

      //Molecular Chemistry

        mchex = window.screen.width*.7695;
        mchey = window.screen.height*0.625 ;
        mchew = 50;
        mcheh = 50;

      //Chemical Egineering

        cheex = window.screen.width*0.55;
        cheey = window.screen.height*0.625;
        cheew = 50;
        cheeh = 50;

      //Biochemistry

        biocx = window.screen.width*0.4945;
        biocy = window.screen.height*0.2888;
        biocw = 75;
        bioch = 50;

    //EE penta

      //power

        powex = window.screen.width*0.65975;
        powey = window.screen.height*0.115;
        powew = 75;
        poweh = 25;

      //basic circuitry 

        bcirx = window.screen.width*0.825;
        bciry = window.screen.height*0.2888 ;
        bcirw = 50; 
        bcirh = 50; 

      //electronic egineering

        elegx = window.screen.width*.7695;
        elegy = window.screen.height*0.625 ;
        elegw = 50;
        elegh = 50;

      //computer egineering

        comex = window.screen.width*0.55;
        comey = window.screen.height*0.625;
        comew = 50;
        comeh = 50;

      //control

        contx = window.screen.width*0.4945;
        conty = window.screen.height*0.2888;
        contw = 75;
        conth = 50;

    //compsci penta

      //Software Maintence

        smaix = window.screen.width*0.65975;
        smaiy = window.screen.height*0.115;
        smaiw = 75;
        smaih = 25;

      //computer science

        comsx = window.screen.width*0.825;
        comsy = window.screen.height*0.2888;
        comsw = 50; 
        comsh = 50;

      //bioinformatics

        bioix = window.screen.width*.7695;
        bioiy = window.screen.height*0.625;
        bioiw = 50;
        bioih = 50;

      //programming

        progx = window.screen.width*0.55;
        progy = window.screen.height*0.625;
        progw = 50;
        progh = 50;

      //software construction

        sofcx = window.screen.width*0.4945;
        sofcy = window.screen.height*0.2888;
        sofcw = 75;
        sofch = 50;

    //Design

      //UI & UX Design

        uxuix = window.screen.width*0.65975;
        uxuiy = window.screen.height*0.115; 
        uxuiw = 75;
        uxuih = 25;

      //Ergonomic  Design

        ergdx = window.screen.width*0.825;
        ergdy = window.screen.height*0.2888;
        ergdw = 50; 
        ergdh = 50;

      //Interaction Design

        intdx = window.screen.width*.7695;
        intdy = window.screen.height*0.625;
        intdw = 50;
        intdh = 50;

      //biodesign

        biodx = window.screen.width*0.55;
        biody = window.screen.height*0.625;
        biodw = 50;
        biodh = 50;

      //systems design

        sysdx = window.screen.width*0.4945;
        sysdy = window.screen.height*0.2888;
        sysdw = 75;
        sysdh = 50;

//functions
  
  function pscore(a,b,c,d,e) {
	   return a+b+c+d+e;
      };

  function hscore (f,g,h,i,j,k){
     };
  function gobacktohex () {
  
    var HexCanvas = new Chart(document.getElementById('HexCanvas'),{

    type: 'radar',
    data: data,
    options: {
      responsive: true ,
      maintainAspectRatio: false,
    }
  });};
  function clearhexbuttons(){
    biobuttonX = 0;
    biobuttonY = 0;
    biobuttonW = 0;
    biobuttonH = 0;
    ggbuttonX = 0;
    ggbuttonY = 0;
    ggbuttonW = 0;
    ggbuttonH = 0;
    ChbuttonX = 0;
    ChbuttonY = 0;
    ChbuttonW = 0;
    ChbuttonH = 0;
    EEbuttonX = 0;
    EEbuttonY = 0;
    EEbuttonW = 0;
    EEbuttonH = 0;
    CompbuttonX = 0;
    CompbuttonY = 0;
    CompbuttonW = 0;
    CompbuttonH = 0;
    DesbuttonX = 0;
    DesbuttonY = 0;
    DesbuttonW = 0;
    DesbuttonH = 0;};

  function resethexbuttons(){
    biobuttonX = window.screen.width*0.6597222222;
    biobuttonY = window.screen.height*0.115;
    biobuttonW = 75;
    biobuttonH = 25;
    CbuttonX = window.screen.width*0.6597222222;
    CbuttonY = window.screen.height*0.38888888888;
    CbuttonW = 50;
    CbuttonH = 50;
    ggbuttonX = window.screen.width*0.79861111111;
    ggbuttonY = window.screen.height*.25;
    ggbuttonW = 100;
    ggbuttonH = 25;
    ChbuttonX = window.screen.width*0.79861111111;
    ChbuttonY = window.screen.height*0.55555555555;
    ChbuttonW = 75;
    ChbuttonH = 25;
    EEbuttonX = window.screen.width*0.6597222222;
    EEbuttonY = window.screen.height*(2/3);
    EEbuttonW = 75;
    EEbuttonH = 50;
    CompbuttonX = window.screen.width*0.48611111111;
    CompbuttonY = window.screen.height*0.55555555555;
    CompbuttonW = 75;
    CompbuttonH = 75;
    DesbuttonX = window.screen.width*0.487;
    DesbuttonY = window.screen.height*0.23;
    DesbuttonW = 75;
    DesbuttonH = 75;
  };
  function clearbiopenta(){
    micrx = 0;
    micry = 0;
    micrw = 0;
    micrh = 0;
    anatx = 0;
    anaty = 0;
    anatw = 0; 
    anath = 0;
    neurx = 0;
    neury = 0;
    neurw = 0;
    neurh = 0;
    sbiox = 0;
    sbioy = 0;
    sbiow = 0;
    sbioh = 0;
    bioex = 0;
    bioey = 0;
    bioew = 0;
    bioeh = 0;
  }
  function clearggpenta(){
    bgenx = 0;
    bgeny = 0;
    bgenw = 0;
    bgenh = 0;
    Genex = 0;
    Geney = 0;
    Genew = 0;
    Geneh = 0;
    genox = 0;
    genoy = 0;
    genow = 0;
    genoh = 0;
    molgx = 0;
    molgy = 0;
    molgw = 0;
    molgh = 0;
    cgenx = 0;
    cgeny = 0;
    cgenw = 0;
    cgenh = 0;
  }
  function clearchempenta(){
    ochex = 0;
    ochey = 0;
    ochew = 0;
    ocheh = 0;
    neucx = 0;
    neucy = 0;
    neucw = 0;
    neuch = 0;
    mchex = 0;
    mchey = 0;
    mchew = 0;
    mcheh = 0;
    cheex = 0;
    cheey = 0;
    cheew = 0;
    cheeh = 0;
    biocx = 0;
    biocy = 0;
    biocw = 0;
    bioch = 0;
  }
  function cleareepenta(){
        powex = 0;
        powey = 0;
        powew = 0;
        poweh = 0;
        bcirx = 0;
        bciry = 0;
        bcirw = 0;
        bcirh = 0;
        elegx = 0;
        elegy = 0;
        elegw = 0;
        elegh = 0;
        comex = 0;
        comey = 0;
        comew = 0;
        comeh = 0;
        contx = 0;
        conty = 0;
        contw = 0;
        conth = 0;
  }
  function clearcompscipenta(){
        smaix = 0;
        smaiy = 0;
        smaiw = 0;
        smaih = 0;
        comsx = 0;
        comsy = 0;
        comsw = 0;
        comsh = 0;
        bioix = 0;
        bioiy = 0;
        bioiw = 0;
        bioih = 0;
        progx = 0;
        progy = 0;
        progw = 0;
        progh = 0;
        sofcx = 0;
        sofcy = 0;
        sofcw = 0;
        sofch = 0;
  }
  function cleardesignpenta(){
        uxuix = 0;
        uxuiy = 0;
        uxuiw = 0;
        uxuih = 0;
        ergdx = 0;
        ergdy = 0;
        ergdw = 0;
        ergdh = 0;
        intdx = 0;
        intdy = 0;
        intdw = 0;
        intdh = 0;
        biodx = 0;
        biody = 0;
        biodw = 0;
        biodh = 0;
        sysdx = 0;
        sysdy = 0;
        sysdw = 0;
        sysdh = 0;
  }
  function clearpentabuttons(){
    clearbiopenta();
    clearggpenta();
    clearchempenta();
    cleareepenta();
    clearcompscipenta();
    cleardesignpenta();
  }
  function resetbiopenta(){
    micrx = window.screen.width*0.65975;
    micry = window.screen.height*0.115;
    micrw = 75;
    micrh = 25;
    anatx = window.screen.width*0.825;
    anaty = window.screen.height*0.2888 ;
    anatw = 50; 
    anath = 50;
    neurx = window.screen.width*.7695;
    neury = window.screen.height*0.625 ;
    neurw = 50;
    neurh = 50;
    sbiox = window.screen.width*0.55;
    sbioy = window.screen.height*0.625;
    sbiow = 50;
    sbioh = 50;
    bioex = window.screen.width*0.4945;
    bioey = window.screen.height*0.2888;
    bioew = 75;
    bioeh = 50;
  }
  function resetggpenta(){
        bgenx = window.screen.width*0.65975;
        bgeny = window.screen.height*0.115;
        bgenw = 75;
        bgenh = 25;
        Genex = window.screen.width*0.825;
        Geney = window.screen.height*0.2888;
        Genew = 50; 
        Geneh = 50;
        genox = window.screen.width*.7695;
        genoy = window.screen.height*0.625;
        genow = 50;
        genoh = 50;
        molgx = window.screen.width*0.55;
        molgy = window.screen.height*0.625;
        molgw = 50;
        molgh = 50;
        cgenx = window.screen.width*0.4945;
        cgeny = window.screen.height*0.2888;
        cgenw = 75;
        cgenh = 50;
  }
  function resetchempenta(){
        ochex = window.screen.width*0.65975;
        ochey = window.screen.height*0.115;
        ochew = 75;
        ocheh = 25;
        neucx = window.screen.width*0.825;
        neucy = window.screen.height*0.2888 ;
        neucw = 50; 
        neuch = 50;
        mchex = window.screen.width*.7695;
        mchey = window.screen.height*0.625 ;
        mchew = 50;
        mcheh = 50;
        cheex = window.screen.width*0.55;
        cheey = window.screen.height*0.625;
        cheew = 50;
        cheeh = 50;
        biocx = window.screen.width*0.4945;
        biocy = window.screen.height*0.2888;
        biocw = 75;
        bioch = 50;
  }
  function resetEEpenta(){
        powex = window.screen.width*0.65975;
        powey = window.screen.height*0.115;
        powew = 75;
        poweh = 25;
        bcirx = window.screen.width*0.825;
        bciry = window.screen.height*0.2888 ;
        bcirw = 50; 
        bcirh = 50; 
        elegx = window.screen.width*.7695;
        elegy = window.screen.height*0.625 ;
        elegw = 50;
        elegh = 50;
        comex = window.screen.width*0.55;
        comey = window.screen.height*0.625;
        comew = 50;
        comeh = 50;
        contx = window.screen.width*0.4945;
        conty = window.screen.height*0.2888;
        contw = 75;
        conth = 50;
  }
  function resetcompscipenta(){
        smaix = window.screen.width*0.65975;
        smaiy = window.screen.height*0.115;
        smaiw = 75;
        smaih = 25;
        comsx = window.screen.width*0.825;
        comsy = window.screen.height*0.2888;
        comsw = 50; 
        comsh = 50;
        bioix = window.screen.width*.7695;
        bioiy = window.screen.height*0.625;
        bioiw = 50;
        bioih = 50;
        progx = window.screen.width*0.55;
        progy = window.screen.height*0.625;
        progw = 50;
        progh = 50;
        sofcx = window.screen.width*0.4945;
        sofcy = window.screen.height*0.2888;
        sofcw = 75;
        sofch = 50;
  }
  function resetdesignpenta(){
        uxuix = window.screen.width*0.65975;
        uxuiy = window.screen.height*0.115; 
        uxuiw = 75;
        uxuih = 25;
        ergdx = window.screen.width*0.825;
        ergdy = window.screen.height*0.2888;
        ergdw = 50; 
        ergdh = 50;
        intdx = window.screen.width*.7695;
        intdy = window.screen.height*0.625;
        intdw = 50;
        intdh = 50;
        biodx = window.screen.width*0.55;
        biody = window.screen.height*0.625;
        biodw = 50;
        biodh = 50;
        sysdx = window.screen.width*0.4945;
        sysdy = window.screen.height*0.2888;
        sysdw = 75;
        sysdh = 50;
  }

//data variables
  var data = {

      labels: ['Biology', 'Genetics & Genomics', 'Chemistry','Electrical Engineering', 'Computer Science', 'Design'],
      datasets: [{
        data: [BioP, GenP, CheP, EleP, ComP, DesP]
        //data:[5,7,8,3,6,4]
      }] };

  var biodata = {

    labels: ['Micro Biology', 'Anatomy', 'Neurobiology','Systems Biology', 'Bioengineering'],
      datasets: [{
        data: [Mbio, Anat, Nbio, Sbio, BioE]
        //data:[5,7,8,3,6,4]
      }] };

  var gendata = {

    labels: ['Behavioural Genetics', 'Genetic Engineering', 'Genomics','Molecular Genetics', 'Classical Genetics'],
      datasets: [{
        data: [Bgen, GenE, Geno, Mgen, Cgen]
        //data:[5,7,8,3,6,4]
      }] };

  var chemdata = {

    labels: ['Organic Chemistry', 'Neurochemistry', 'Molecular Chemistry','Chemical Engineering', 'Biochemistry'],
      datasets: [{
        data: [Oche, Nche, Mche, CheE, Bche]
        //data:[5,7,8,3,6,4]
      }] };

  var compdata = {

    labels: ['Software Maintence', 'Computer Science', 'Bioinformatics','Programming', 'Software Construction'],
      datasets: [{
        data: [Smai, Csci, BioI, Prog, Scon]
        //data:[5,7,8,3,6,4]
      }]};

  var elecdata = {

    labels: ['Power', 'Basic Circuitry', 'Electronic Engineering','Computer Engineering', 'Control'],
      datasets: [{
        data: [Powe, BCir, Eeng, Ceng, Cont]
        //data:[5,7,8,3,6,4]
      }]};

  var desdata = {

    labels: ['UI & UX Design', 'Ergonomic Design', 'Interaction Design','Biodesign', 'Systems design'],
      datasets: [{
        data: [Udes, Edes, Ides, Bdes, Sdes]
        //data:[5,7,8,3,6,4]
      }] };

//original hexagon radar chart
  let hexagon = true;
  var HexCanvas = new Chart(document.getElementById('HexCanvas'),{

    type: 'radar',
    data: data,
    options: {
      responsive: true ,
      maintainAspectRatio: false,
    }
  });

//bi0penta
  
  document.getElementById("HexCanvas").addEventListener('click', function(event) {
  // Control that click event occurred within position of button
  //biology clicked
  if (
    hexagon &&
    event.pageX > biobuttonX && 
    event.pageX < biobuttonX + biobuttonW &&
    event.pageY > biobuttonY && 
    event.pageY < biobuttonY + biobuttonH
  ) {

      // Executes if button was clicked!
      //alert('bioButton was clicked!');
      //creates new chart with only bio specific info
      clearhexbuttons();
      resetbiopenta();
      hexagon = false;
      var biopenta = new Chart(document.getElementById('HexCanvas'),{

      type: 'radar',
      data: biodata,
      options: {
        responsive: true ,
        maintainAspectRatio: false,
        }
      });

      //microbio button
      if (!hexagon) {
      document.getElementById("HexCanvas").addEventListener('dblclick', function(event) {
        if(
          event.pageX > micrx &
          event.pageX < micrx + micrw &&
          event.pageY > micry &&
          event.pageY < micry + micrh
        ) 
        
        {

          window.location.href="microbiology.html";

        }
      });};
      
      //anatomy button

      document.getElementById("HexCanvas").addEventListener('click', function(event){
        if(
            event.pageX > anatx &&
            event.pageX < anatx + anatw &&
            event.pageY > anaty &&
            event.pageY < anaty + anath
          )
          {
            window.location.href="anatomy.html";
          }
      });

      //neurobiology

      document.getElementById("HexCanvas").addEventListener('click',function(event){
        if (
            event.pageX > neurx && 
            event.pageX < neurx + neurw &&
            event.pageY > neury &&
            event.pageY < neury + neurh
          ) {
          window.location.href="neurobiology.html";
        }
      });

      //Systems Biology

      document.getElementById("HexCanvas").addEventListener('click',function(event){
        if (
            event.pageX >  sbiox &&
            event.pageX <  sbiox + sbiow  &&
            event.pageY >  sbioy &&
            event.pageY <  sbioy + sbioh
          ) {
          window.location.href="sysbio.html";
        }
      });

      //Bioegineering

      document.getElementById("HexCanvas").addEventListener('click',function(event){
        if (
            event.pageX >  bioex &&
            event.pageX <  bioex + bioew  &&
            event.pageY >  bioey &&
            event.pageY <  bioey + bioeh 
          ) {
          window.location.href="bioe.html";
        }
      });
  }
  }); 
  
//center button
  document.getElementById("HexCanvas").addEventListener('click', function(event) {
  // Control that click event occurred within position of button
  //center clicked
  if (
    event.pageX > CbuttonX && 
    event.pageX < CbuttonX + CbuttonW &&
    event.pageY > CbuttonY && 
    event.pageY < CbuttonY + CbuttonH
  ) {
    
    // Executes if button was clicked!
    //alert('Center Button was clicked!');
    gobacktohex();
    resethexbuttons();
    hexagon = true;
    clearpentabuttons();
  } 
  });

//Genetics & Genomics penta
  document.getElementById("HexCanvas").addEventListener('click', function(event) {
  // Control that click event occurred within position of button
  //genetics and genomics clicked
  if (
    event.pageX > ggbuttonX && 
    event.pageX < ggbuttonX + ggbuttonW &&
    event.pageY > ggbuttonY && 
    event.pageY < ggbuttonY + ggbuttonH
  ) {
    
    // Executes if button was clicked!
    //alert('ggButton was clicked!');
    clearhexbuttons();
    resetggpenta();
    var ggpenta = new Chart(document.getElementById('HexCanvas'),{

    type: 'radar',
    data: gendata,
    options: {
      responsive: true ,
      maintainAspectRatio: false,
    }
 });
    //Behavioural genetics
    document.getElementById("HexCanvas").addEventListener('click', function(event){
      if (
          event.pageX > bgenx &&
          event.pageX < bgenx + bgenw &&
          event.pageY > bgeny &&
          event.pageY < bgeny + bgenh 
        ) {

          window.location.href = "bgen.html";
      }
    });
    //Genetic egineering
    document.getElementById("HexCanvas").addEventListener('click', function(event){
      if (
          event.pageX > Genex &&
          event.pageX < Genex + Genew &&
          event.pageY > Geney &&
          event.pageY < Geney + Geneh 
        ) {

          window.location.href = "gene.html";
      }
    });
    //Genomics
    document.getElementById("HexCanvas").addEventListener('click', function(event){
      if (
          event.pageX > genox &&
          event.pageX < genox + genow &&
          event.pageY > genoy && 
          event.pageY < genoy + genoh 
        ) {

          window.location.href = "geno.html";
      }
    });
    //Molecular Genetics
    document.getElementById("HexCanvas").addEventListener('click', function(event){
      if (
          event.pageX > molgx &&
          event.pageX < molgx + molgw &&
          event.pageY > molgy &&
          event.pageY < molgy + molgh 
        ) {

          window.location.href = "molg.html";
      }
    });
    //Classical Genetics
    document.getElementById("HexCanvas").addEventListener('click', function(event){
      if (
          event.pageX > cgenx &&
          event.pageX < cgenx + cgenw &&
          event.pageY > cgeny &&
          event.pageY < cgeny + cgenh
        ) {

          window.location.href = "cgen.html";
      }
    });
  } 
  });

//Chemistry pentagon
  document.getElementById("HexCanvas").addEventListener('click', function(event) {
  // Control that click event occurred within position of button
  //chemistry clicked
  if (
    event.pageX > ChbuttonX && 
    event.pageX < ChbuttonX + ChbuttonW &&
    event.pageY > ChbuttonY && 
    event.pageY < ChbuttonY + ChbuttonH
  ) {
    
    // Executes if button was clicked!
    //alert('Chemistry Button was clicked!');
    clearhexbuttons();
    resetchempenta();
    var Chempenta = new Chart(document.getElementById('HexCanvas'),{

    type: 'radar',
    data: chemdata,
    options: {
      responsive: true ,
      maintainAspectRatio: false,
    }
    });
    //Organic Chemistry
    document.getElementById('HexCanvas').addEventListener('click', function(event){
      if (
        event.pageX > ochex &&
        event.pageX < ochex + ochew &&
        event.pageY > ochey &&
        event.pageY < ochey + ocheh
        ) {
        window.location.href= "oche.html";
      }
    });
    //NeuroChemistry
    document.getElementById('HexCanvas').addEventListener('click', function(event){
      if (
        event.pageX > neucx &&
        event.pageX < neucx + neucw &&
        event.pageY > neucy && 
        event.pageY < neucy + neuch
        ) {
        window.location.href = "neuc.html";
      }
    });
    //Molecular Chemistry
    document.getElementById('HexCanvas').addEventListener('click', function(event){
      if (
        event.pageX > mchex &&
        event.pageX < mchex + mchew &&
        event.pageY > mchey &&
        event.pageY < mchey + mcheh
        ) {
        window.location.href = "mche.html";
      }
    });
    //Chemical Egineering
    document.getElementById('HexCanvas').addEventListener('click', function(event){
      if (
        event.pageX > cheex &&
        event.pageX < cheex + cheew &&
        event.pageY > cheey &&
        event.pageY < cheey + cheeh
        ) {
        window.location.href = "chee.html";
      }
    });
    //Biochemistry
    document.getElementById('HexCanvas').addEventListener('click', function(event){
      if (
        event.pageX > biocx &&
        event.pageX < biocx + biocw &&
        event.pageY > biocy &&
        event.pageY < biocy + bioch
        ) {
        window.location.href = "bioc.html";
        }
    });
    } 
  });

//Electrical Engineering pentagon
  
  document.getElementById("HexCanvas").addEventListener('click', function(event) {
  // Control that click event occurred within position of button
  // EE clicked
  if (
    event.pageX > EEbuttonX && 
    event.pageX < EEbuttonX + EEbuttonW &&
    event.pageY > EEbuttonY && 
    event.pageY < EEbuttonY + EEbuttonH
  ) {
    
    // Executes if button was clicked!
    //alert('Electrical Button was clicked!');
    clearhexbuttons();
    resetEEpenta();
    var EEpenta = new Chart(document.getElementById('HexCanvas'),{

    type: 'radar',
    data: elecdata,
    options: {
      responsive: true ,
      maintainAspectRatio: false,
    }
    });

    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > powex &&
            event.pageX < powex + powew &&
            event.pageY > powey &&
            event.pageY < powey + poweh
        ) {

          window.location.href="powe.html";

      }

    });
  
    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > bcirx &&
            event.pageX < bcirx + bcirw &&
            event.pageY > bciry &&
            event.pageY < bciry + bcirh 
        ) {

        window.location.href="bcir.html";

      }

    });

    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > elegx &&
            event.pageX < elegx + elegw &&
            event.pageY > elegy &&
            event.pageY < elegy + elegh
        ) {

          window.location.href="eleg.html";

      }

    });
    
    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > comex &&
            event.pageX < comex + comew &&
            event.pageY > comey &&
            event.pageY < comey + comeh 
        ) {

        window.location.href="come.html";

      }

    });

    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > contx &&  
            event.pageX < contx + contw &&
            event.pageY > conty &&
            event.pageY < conty + conth
        ) {

            window.location.href="cont.html";

      }

    });
  } 
  });

//Computer Science Pentagon
  document.getElementById("HexCanvas").addEventListener('click', function(event) {
  // Control that click event occurred within position of button
  //Computer button clicked
  if (
    event.pageX > CompbuttonX && 
    event.pageX < CompbuttonX + CompbuttonW &&
    event.pageY > CompbuttonY && 
    event.pageY < CompbuttonY + CompbuttonH
  ) {
    
    // Executes if button was clicked!
    //alert('Computer button was clicked!');
    clearhexbuttons();
    resetcompscipenta();
    var Compenta = new Chart(document.getElementById('HexCanvas'),{

    type: 'radar',
    data: compdata,
    options: {
      responsive: true ,
      maintainAspectRatio: false,
    }
 });
    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > smaix &&
            event.pageX < smaix + smaiw &&
            event.pageY > smaiy &&
            event.pageY < smaiy + smaih
        ) {

        window.location.href = "smai.hmtl";

      }

    });
    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > comsx &&
            event.pageX < comsx + comsw &&
            event.pageY > comsy &&
            event.pageY < comsy +comsh
        ) {

        window.location.href = "coms.html";

      }

    });
    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > bioix &&
            event.pageX < bioix + bioiw &&
            event.pageY > bioiy &&
            event.pageY < bioiy + bioih
        ) {

          window.location.href = "bioi.html";

      }

    });
    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > progx &&
            event.pageX < progx + progw &&
            event.pageY > progy &&
            event.pageY < progy + progh
        ) {

        window.location.href = "prog.html";

      }

    });
    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > sofcx &&
            event.pageX < sofcx + sofcw &&
            event.pageY > sofcy &&
            event.pageY < sofcy + sofch
        ) {

        window.location.href = "sofc.html";

      }

    });
  } 
  });

//Design Pentagon
  document.getElementById("HexCanvas").addEventListener('click', function(event) {
  // Control that click event occurred within position of button
  //Design button clicked
  if (
    event.pageX > DesbuttonX && 
    event.pageX < DesbuttonX + DesbuttonW &&
    event.pageY > DesbuttonY && 
    event.pageY < DesbuttonY + DesbuttonH
  ) {
    
    // Executes if button was clicked!
    //alert('Design button was clicked!');
    clearhexbuttons();
    resetdesignpenta();
    var despenta = new Chart(document.getElementById('HexCanvas'),{

    type: 'radar',
    data: desdata,
    options: {
      responsive: true ,
      maintainAspectRatio: false,
      }
    });
    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > uxuix &&
            event.pageX < uxuix + uxuiw &&
            event.pageY > uxuiy &&
            event.pageY < uxuiy + uxuih
        ) {

        window.location.href = "uxui.html";

      }

    });
    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > ergdx &&
            event.pageX < ergdx + ergdw &&
            event.pageY > ergdy &&
            event.pageY < ergdy + ergdh
        ) {

        window.location.href = "ergd.html";

      }

    });
    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > intdx &&
            event.pageX < intdx + intdw &&
            event.pageY > intdy &&
            event.pageY < intdy + intdh
        ) {

        window.location.href = "intd.html";

      }

    });
    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > biodx &&
            event.pageX < biodx + biodw &&
            event.pageY > biody &&
            event.pageY < biody + biodh
        ) {

        window.location.href = "biod.html";

      }

    });
    document.getElementById('HexCanvas').addEventListener('click', function(event){

      if (
            event.pageX > sysdx &&
            event.pageX < sysdx + sysdw &&
            event.pageY > sysdy &&
            event.pageY < sysdy +sysdh
        ) {

        window.location.href = "sysd.html";

      }

    });
  }});