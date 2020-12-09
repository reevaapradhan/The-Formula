class Form {

  constructor() {
    // Subject buttons
    this.mathsB = createButton('Math');
    this.physicsB = createButton('Physics');
    this.chemistryB = createButton('Chemistry');
    this.biologyB = createButton('Biology');

    //styling for Subject button
    this.mathsB.style('font-size', '30px');
    this.mathsB.style('background-color', color(100, 150, 200));
    this.mathsB.style('font-family', 'Century');

    this.physicsB.style('font-size', '30px');
    this.physicsB.style('background-color', color(100, 150, 200));
    this.physicsB.style('font-family', 'Century');

    this.chemistryB.style('font-size', '30px');
    this.chemistryB.style('background-color', color(100, 150, 200));
    this.chemistryB.style('font-family', 'Century');

    this.biologyB.style('font-size', '30px');
    this.biologyB.style('background-color', color(100, 150, 200));
    this.biologyB.style('font-family', 'Century');

    // Greeting texts
    this.greeting = createElement('h2');
    this.greetingMath = createElement('h2');
    this.greetingPhysiscs = createElement('h2');
    this.greetingChemistry = createElement('h2');
    this.greetingBiology = createElement('h2');
    this.title = createElement('h3');

    //Styling the greetings
    this.greeting.style('font-size', '40px');
    this.greeting.style('background-color', color(190, 230, 250));
    this.greeting.style('font-family', 'Century');

    this.title.style('font-size', '20px');
    this.title.style('background-color', color(190, 230, 250));

    this.greetingMath.style('font-size', '40px');
    this.greetingMath.style('font-family', 'Century');

    this.greetingPhysiscs.style('font-size', '40px');
    this.greetingPhysiscs.style('font-family', 'Century');

    this.greetingChemistry.style('font-size', '40px');
    this.greetingChemistry.style('font-family', 'Century');

    this.greetingBiology.style('font-size', '40px');
    this.greetingBiology.style('font-family', 'Century');

    //Back Button
    this.back = createButton('BACK ←');

    //styling back button
    this.back.style('font-size', '20px');
    this.back.style('background-color', color(250, 200, 0));
    this.back.style('font-family', 'Century');

    //loading math buttons
    this.loadMathButtons();
    //load math images
    this.loadMathImages();

    //loading physics buttons
    this.loadPhysicsButtons();
    //load physics images
    this.loadPhysicsImages();

    //loading chemistry buttons
    this.loadChemistryButtons();
    //loading chemistry images
    this.loadChemistryImages();

    //loading biology buttons
    this.loadBiologyButtons();
    //loading biology images
    this.loadBiologyImages();

  //  this.bgI = loadImage("images/bgb.jpg")
  }

  display() {
    background("white");
    this.greeting.html("Welcome To The Formula Page");
    this.greeting.position(displayWidth / 2 - 350, 20);

    this.title.html("Select the subject from the given list below");
    this.title.position(displayWidth / 2 - 250, 85);

    //positioning subject buttons
    this.mathsB.position(displayWidth / 2 - 150, displayHeight / 2 - 200);
    this.physicsB.position(displayWidth / 2 - 150, displayHeight / 2 - 150);
    this.chemistryB.position(displayWidth / 2 - 150, displayHeight / 2 - 100);
    this.biologyB.position(displayWidth / 2 - 150, displayHeight / 2 - 50);

    //show subject buttons
    this.showSubButtons();

    this.greetingMath.hide();
    this.greetingPhysiscs.hide();
    this.greetingChemistry.hide();
    this.greetingBiology.hide();
    this.back.hide();

    this.greeting.show();
    this.title.show();

    //Hide Math Buttons
    this.hideMathButtons();

    //Hide physics buttons
    this.hidePhysicsButtons();

    //Hide Chemistry butttons
    this.hideChemistryButtons();

    //hide Biology buttons
    this.hideBiologyButtons();

    this.propofexpo_I.hide();


    /* 
      MATH START
    */

    //if Math is selected
    this.mathsB.mousePressed(() => {
      //hiding buttons from main screen
      this.hideSubButtons();
      this.title.hide();
      this.greeting.hide();

      //show Math buttons
      this.showMathButtons();

      //Displying greeting Math
      this.greetingMath.html("Welcome To The Math Formula Page");
      this.greetingMath.position(displayWidth / 2 - 350, 2);
      this.greetingMath.show();

      //adding topic buttons
      this.positionMathTopics();

      //positioning back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);
      this.back.show();

      //if back button is pressed Show Subject
      this.back.mousePressed(() => {
        this.display();
      });

    });

    //if 'Angle Properties' is selected
    this.anglePropB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.compNSup_I, displayWidth / 2 - 520, displayHeight / 4 + 50, 500, 300);
      image(this.anglesOfTriangle_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
      image(this.anglesOfTrianglQuad_I, displayWidth / 2 + 490, displayHeight / 4 + 50, 500, 300);
      image(this.typesOfAngles_I, displayWidth / 2 - 550, displayHeight / 2 + 150, 430, 300);
      image(this.phythogoras_I, displayWidth / 2 - 50, displayHeight / 2 + 150, 500, 250);
      image(this.transversals_I, displayWidth / 2 + 450, displayHeight / 2 + 150, 500, 300);

    })

    //if 'Area and Perimeter os 2D Shapes' is selected
    this.areaandperiB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.area_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
      image(this.perimeterCircle_I, displayWidth / 2 + 490, displayHeight / 4 + 50, 500, 300);
      image(this.perimeter_I, displayWidth / 2 - 520, displayHeight / 4 + 50, 500, 300);
    })

    //if 'Congruency and Triangles' is selected
    this.congruencyandtriB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.congntri1_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
      image(this.congntri2_I, displayWidth / 2 - 20, displayHeight / 2 + 100, 500, 250);
    })

    //if 'Different types of graphs' is selected
    this.difftypeofgraphB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.bar_I, displayWidth / 2 - 520, displayHeight / 4 + 50, 500, 300);
      image(this.histogram_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
      image(this.line_I, displayWidth / 2 + 490, displayHeight / 4 + 50, 500, 300);
      image(this.pie_I, displayWidth / 2 - 550, displayHeight / 2 + 150, 430, 300);
      image(this.stemnleaf_I, displayWidth / 2 - 50, displayHeight / 2 + 150, 500, 250);
    })

    //if 'Exponents' is selected
    this.exponentsB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.propofexpo_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
    })

    //if 'Expressions' is selected
    this.expressionsB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.expwithbrackets_I, displayWidth / 2 - 520, displayHeight / 4 + 50, 500, 300);
      image(this.expanandfactorise_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
      image(this.factorisengroup_I, displayWidth / 2 + 490, displayHeight / 4 + 50, 500, 300);
      image(this.changethesub_I, displayWidth / 2 - 550, displayHeight / 2 + 150, 430, 300);
      image(this.substitution_I, displayWidth / 2 - 50, displayHeight / 2 + 150, 500, 250);
      image(this.subintoformula_I, displayWidth / 2 + 450, displayHeight / 2 + 150, 500, 300);
    })

    //if 'Fractions' is selected
    this.fractionsB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.addfrac_I, displayWidth / 2 - 520, displayHeight / 4 + 50, 500, 300);
      image(this.dividefrac_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
      image(this.fractodeci_I, displayWidth / 2 + 490, displayHeight / 4 + 50, 500, 300);
      image(this.fractoperc_I, displayWidth / 2 - 550, displayHeight / 2 + 150, 430, 300);
      image(this.multfrac_I, displayWidth / 2 - 50, displayHeight / 2 + 150, 500, 250);
      image(this.subfrac_I, displayWidth / 2 + 450, displayHeight / 2 + 150, 500, 300);
    })

    //if 'Measurements' is selected
    this.measurementsB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.unitnquan_I, displayWidth / 2 - 520, displayHeight / 4 + 50, 500, 300);
      image(this.multiples_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
      image(this.fractions_I, displayWidth / 2 + 490, displayHeight / 4 + 50, 500, 300);
      image(this.metricnimperial_I, displayWidth / 2 - 550, displayHeight / 2 + 150, 430, 300);
    })

    //if 'Polygons' is selected
    this.polygonsB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.anglesum_I, displayWidth / 2 - 520, displayHeight / 4 + 50, 500, 300);
      image(this.typeofpolygons_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
    })

    //if 'Properties of 2D Shapes' is selected
    this.propof2dB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.quad1_I, displayWidth / 2, displayHeight / 4 + 50, 500, 300);
      image(this.quad2_I, displayWidth / 2, displayHeight / 2 + 150, 500, 250);
    })

    //if 'Properties Of 3D Shapes' is selected
    this.propof3dB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.shapes3d_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
    })

    //if 'Sequences' is selected
    this.sequencesB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.arithseq_I, displayWidth / 2 - 520, displayHeight / 4 + 50, 500, 300);
      image(this.geoseq_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
      image(this.quadseq_I, displayWidth / 2 + 490, displayHeight / 4 + 50, 500, 300);
    })

    //if 'Sets and Subsets' is selected
    this.setsandsubsetsB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.equequcompnuni_I, displayWidth / 2 - 520, displayHeight / 4 + 50, 500, 300);
      image(this.setnsubset_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
      image(this.subsetnproper_I, displayWidth / 2 + 490, displayHeight / 4 + 50, 500, 300);
    })

    //if 'Solving Simultaneous Equation' is selected
    this.solvsimultequatB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.simulequa1_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
      image(this.simulequa2_I, displayWidth / 2 - 20, displayHeight / 2 + 150, 500, 250);
    })

    //if 'Squares and Cubes' is selected
    this.squaresandcubeB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.squncube_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
    })

    //if 'Symmetry of 2D Shapes' is selected
    this.symmof2dB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.symm2d_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
    })

    //if 'The Number System' is selected
    this.numbsysB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.numb_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
    })

    //if 'Trigonometry' is selected
    this.trignometryB.mousePressed(() => {
      this.hideMathButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.trig_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
    })

    /* 
     MATH END
   */


    /* 
     PHYSICS START
   */

    //if Physics is selected
    this.physicsB.mousePressed(() => {
      //hiding buttons from main screen
      this.hideSubButtons();
      this.title.hide();
      this.greeting.hide();
      this.greetingPhysiscs.show();

      //show Physics buttons
      this.showPhysicsButtons();

      //Displying greeting Math
      this.greetingPhysiscs.html("Welcome To The Physics Formula Page");
      this.greetingPhysiscs.position(displayWidth / 2 - 420, 2);

      //adding topic buttons
      this.positionPhysicsTopics();

      //positioning back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);
      this.back.show();

      //if back button is pressed Show Subject
      this.back.mousePressed(() => {
        this.display();
      });

    });

    //if 'Accelaration' is selected
    this.accelarationB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.accelaration_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Compressing Gases' is selected
    this.compresgasB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.compresgas_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Density' is selected
    this.densityB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.density_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Efficiency' is selected
    this.efficiencyB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.efficiency_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Energy and State Change' is selected
    this.energynstatechangeB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.energynstatechange_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Energy and Temperature Change' is selected
    this.energyntempchangeB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.energyntempchange_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Force' is selected
    this.forceB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.force_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Gravitational Potential Energy' is selected
    this.gpeB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.gpe_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Kinetic Energy' is selected
    this.keB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.ke_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Moment of Force' is selected
    this.momentofforceB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.momentofforce_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Momentum' is selected
    this.momentumB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.momentum_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Power' is selected
    this.powerB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.power_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Pressure in Liquid' is selected
    this.pressinliqB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.pressinliq_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Pressure' is selected
    this.pressB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.press_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Speed of Waves' is selected
    this.speedofwavesB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.speedofwaves_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Speed' is selected
    this.speedB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.speed_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Spring Constant' is selected
    this.springConstantB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.springConstant_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Temperature' is selected
    this.tempB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.temp_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Weight' is selected
    this.weightB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.weight_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Work Done' is selected
    this.workdoneB.mousePressed(() => {
      this.hidePhysicsButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.workdone_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    /* 
      PHYSICS END
    */

    /* 
      CHEMISTRY START
    */

    //if Chemistry is selected
    this.chemistryB.mousePressed(() => {
      //hiding buttons from main screen
      this.hideSubButtons();
      this.title.hide();
      this.greeting.hide();
      this.greetingChemistry.show();

      //show Chemistry buttons
      this.showChemistryButtons();

      //Displying greeting Math
      this.greetingChemistry.html("Welcome To The Chemistry Formula Page");
      this.greetingChemistry.position(displayWidth / 2 - 440, 2);

      //adding topic buttons
      this.positionChemistryTopics();

      //positioning back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);
      this.back.show();

      //if back button is pressed Show Subject
      this.back.mousePressed(() => {
        this.display();
      });
    });

    //if 'Elements and Details' is selected
    this.elementsdetailsB.mousePressed(() => {
      this.hideChemistryButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.symbnproton1_I, displayWidth / 2 - 20, displayHeight / 4 + 50, 500, 300);
      image(this.symbnproton2_I, displayWidth / 2 - 20, displayHeight / 2 + 100, 500, 250);
    })

    //if 'Energy Changes in Reaction' is selected
    this.energychangeinreactB.mousePressed(() => {
      this.hideChemistryButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.energychangeinreact_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Equation for a Reaction' is selected
    this.equaforreactB.mousePressed(() => {
      this.hideChemistryButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.equaforreact_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Formula using Valency' is selected
    this.formulausevalencyB.mousePressed(() => {
      this.hideChemistryButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.formulausevalency_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Mass of molecules and ions' is selected
    this.massofmolenionB.mousePressed(() => {
      this.hideChemistryButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.massofmolenion_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Percentage Purity' is selected
    this.percpureB.mousePressed(() => {
      this.hideChemistryButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.percpure_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'The Periodic Table' is selected
    this.periodictableB.mousePressed(() => {
      this.hideChemistryButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.periodictable_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Valency of Elements' is selected
    this.valencyofelementB.mousePressed(() => {
      this.hideChemistryButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.valencyofelement_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    /* 
      CHEMISTRY END
    */

    /* 
      BIOLOGY START
    */

    //if Biology is selected
    this.biologyB.mousePressed(() => {
      //hiding buttons from main screen
      this.hideSubButtons();
      this.greetingBiology.show();
      this.title.hide();
      this.greeting.hide();

      //show Math buttons
      this.showBiologyButtons();

      //Displying greeting Math
      this.greetingBiology.html("Welcome To The Biology Formula Page");
      this.greetingBiology.position(displayWidth / 2 - 350, 2);

      //adding topic buttons
      this.positionBiologyTopics();

      //positioning back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);
      this.back.show();

      //if back button is pressed Show Subject
      this.back.mousePressed(() => {
        this.display();
      });

    });

    //if 'Active Transport' is selected
    this.activetransB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.activetrans_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Animal and Plant Cell' is selected
    this.animalnplantB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.animalnplant_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Balanced Diet and Malnutrition' is selected
    this.balanceddietnmalB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.balanceddietnmal_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Cell Membrane' is selected
    this.cellmembraneB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.cellmembrane_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Cells Summary' is selected
    this.cellsB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.cells_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Chromosome' is selected
    this.chromosomeB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.chromosome_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Classification' is selected
    this.classificationB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.classification_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Defination for inheritance' is selected
    this.defforinheritB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.defforinherit_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Diffusion' is selected
    this.diffusionB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.diffusion_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'DNA' is selected
    this.dnaB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.dna_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Effects of malnutrition' is selected
    this.effectofmalB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.effectofmal_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Female reproduction' is selected
    this.femalereproB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.femalerepro_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Gene' is selected
    this.geneB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.gene_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Important Nutrition' is selected
    this.impnutrientsB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.impnutrients_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'Inheritance of Blood GRoup ' is selected
    this.inheritofbloodB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.inheritofblood_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'male reproduction' is selected
    this.malereproB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.malerepro_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'monocot and Dicot' is selected
    this.monondicotB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.monondicot_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'osmosis' is selected
    this.osmosisB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.osmosis_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'summary of classification' is selected
    this.sumofclassB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.sumofclass_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    //if 'type of reproduction' is selected
    this.typeofreproB.mousePressed(() => {
      this.hideBiologyButtons();

      //back button
      this.back.position(displayWidth / 4 - 340, displayHeight / 2 - 380);

      imageMode(CENTER);
      image(this.typeofrepro_I, displayWidth / 2 - 50, displayHeight / 4 + 120, 500, 400);
    })

    /* 
      BIOLOGY END
    */
  }


  //function to load individual subject topics images
  loadMathImages() {
    //loading 'Angle Properties' images
    this.anglesOfTriangle_I = loadImage("/images/Angle Properties/Angles of triangles.jpg");
    this.anglesOfTrianglQuad_I = loadImage("/images/Angle Properties/Angles of Quadrilaterals.jpg");
    this.compNSup_I = loadImage("/images/Angle Properties/Complementary and supplemantary.jpg");
    this.phythogoras_I = loadImage("/images/Angle Properties/Pythagoras Theorem.gif");
    this.transversals_I = loadImage("/images/Angle Properties/Transversals.jpg");
    this.typesOfAngles_I = loadImage("/images/Angle Properties/Types of angles.jpg");

    //loading 'Area and Perometer of 2D Shapes' images
    this.area_I = loadImage("/images/Area And Perimeter Of 2D Shapes/Area.png");
    this.perimeterCircle_I = loadImage("/images/Area And Perimeter Of 2D Shapes/Perimeter Of Circle.PNG");
    this.perimeter_I = loadImage("/images/Area And Perimeter Of 2D Shapes/Perimeter.PNG");

    //loading 'Congruency and Triangles' images
    this.congntri1_I = loadImage("images/Congruency And Triangles/20201130_100416.jpg");
    this.congntri2_I = loadImage("images/Congruency And Triangles/20201130_100603.jpg");

    //loading 'Different Types Of Graphs' images
    this.bar_I = loadImage("images/Different Types Of Graphs/Bar Chart.PNG");
    this.histogram_I = loadImage("images/Different Types Of Graphs/Histogram.PNG");
    this.line_I = loadImage("images/Different Types Of Graphs/Line graph.PNG");
    this.pie_I = loadImage("images/Different Types Of Graphs/Pie Chart.PNG");
    this.stemnleaf_I = loadImage("images/Different Types Of Graphs/Stem and Leaf Diagram.jpg");

    //loading 'Exponents' images
    this.propofexpo_I = createImg("images/Exponents(indices)/Properties of exponents.jpg");

    //loading 'Expressions' images
    this.expwithbrackets_I = loadImage("images/Expressions/20201130_151243.jpg");
    this.expanandfactorise_I = loadImage("images/Expressions/20201130_151539.jpg");
    this.factorisengroup_I = loadImage("images/Expressions/20201130_151638.jpg");
    this.changethesub_I = loadImage("images/Expressions/20201130_151752.jpg");
    this.substitution_I = loadImage("images/Expressions/20201130_151902.jpg");
    this.subintoformula_I = loadImage("images/Expressions/20201130_152216.jpg");

    //loading 'Fractions' images
    this.addfrac_I = loadImage("images/Fractions/add-fractions.png");
    this.dividefrac_I = loadImage("images/Fractions/divide-fractions.png");
    this.fractodeci_I = loadImage("images/Fractions/fraction-decimal.png");
    this.fractoperc_I = loadImage("images/Fractions/fractions-percents.png");
    this.multfrac_I = loadImage("images/Fractions/Multiply fractions.gif");
    this.subfrac_I = loadImage("images/Fractions/sub-fractions.png");

    //loading 'Measurements' images
    this.unitnquan_I = loadImage("images/Measurements/20201130_111148.jpg");
    this.multiples_I = loadImage("images/Measurements/20201130_111604.jpg");
    this.fractions_I = loadImage("images/Measurements/20201130_111635.jpg");
    this.metricnimperial_I = loadImage("images/Measurements/Metric and Imperial Conversions.png");

    //loading 'Polgons' images
    this.anglesum_I = loadImage("images/Polygons/20201130_103847.jpg");
    this.typeofpolygons_I = loadImage("images/Polygons/Types of polygons.jpg");

    //loading 'Properties of 2D shapes' images
    this.quad1_I = loadImage("images/Properties Of 2D Shapes/20201130_094059.jpg");
    this.quad2_I = loadImage("images/Properties Of 2D Shapes/20201130_094112.jpg");

    //loading 'Properties of 3D shapes' images
    this.shapes3d_I = loadImage("images/Properties Of 3D Shapes/3D Shapes.jpg");

    //loading 'Sequences' images
    this.arithseq_I = loadImage("images/Sequences/Arithmetic sequence formula.jpg");
    this.geoseq_I = loadImage("images/Sequences/Geometric Sequence Formula (1).jpg");
    this.quadseq_I = loadImage("images/Sequences/Quadratic sequence Formula.jpg");

    //loading 'Sets and Subsets' images
    this.equequcompnuni_I = loadImage("images/Sets and Subsets/Equivalent, Equal , Complementary and Universal.jpg");
    this.setnsubset_I = loadImage("images/Sets and Subsets/Sets and Subsets.jpg");
    this.subsetnproper_I = loadImage("images/Sets and Subsets/Subset and Proper subset.jpg");

    //loading 'Solving Simultaneous Equation' images
    this.simulequa1_I = loadImage("images/Solving simulataneous equations/20201130_150001.jpg");
    this.simulequa2_I = loadImage("images/Solving simulataneous equations/20201130_150210.jpg");

    //loading 'Squares and Cubes' images
    this.squncube_I = loadImage("images/Squares and Cubes/20201130_115804.jpg");

    //loading 'Symmetry of 2D shapes' images
    this.symm2d_I = loadImage("images/Symmetry Of 2D Shapes/20201130_095918.jpg");

    //loading 'The Number System' images
    this.numb_I = loadImage("images/The Number System/20201130_115246.jpg");

    //loading 'Trigonometry' images
    this.trig_I = loadImage("images/Trigonometry/0001-1-819x1024.jpg");
  }

  loadPhysicsImages() {
    this.accelaration_I = loadImage("images/Accelaration.jpeg");
    this.compresgas_I = loadImage("images/Compressing Gases.jpeg");
    this.density_I = loadImage("images/Density.jpeg");
    this.efficiency_I = loadImage("images/Efficiency.jpeg");
    this.energynstatechange_I = loadImage("images/Energy and State Change.jpeg");
    this.energyntempchange_I = loadImage("images/Energy and Temperature Change.jpeg");
    this.force_I = loadImage("images/Force.jpeg");
    this.gpe_I = loadImage("images/Gravitational Potential energy.jpeg");
    this.ke_I = loadImage("images/Kinetic Energy.jpeg");
    this.momentofforce_I = loadImage("images/Moment of force.jpeg");
    this.momentum_I = loadImage("images/Momentum.jpeg");
    this.power_I = loadImage("images/Power.jpeg");
    this.pressinliq_I = loadImage("images/Pressure in Liquid.jpeg");
    this.press_I = loadImage("images/Pressure.jpeg");
    this.speedofwaves_I = loadImage("images/Speed of waves.jpeg");
    this.speed_I = loadImage("images/Speed.jpeg");
    this.springConstant_I = loadImage("images/Spring constant and extension.jpeg");
    this.temp_I = loadImage("images/Temperature.jpeg");
    this.weight_I = loadImage("images/Weight.jpeg");
    this.workdone_I = loadImage("images/Work done.jpeg");
  }

  loadChemistryImages() {
    this.symbnproton1_I = loadImage("images/Chemistry/Elements Details/20201130_174536.jpg");
    this.symbnproton2_I = loadImage("images/Chemistry/Elements Details/20201130_175316.jpg");
    this.energychangeinreact_I = loadImage("images/Chemistry/Energy Changes in reaction/20201130_175834.jpg");
    this.equaforreact_I = loadImage("images/Chemistry/Equation for a reaction/20201130_175437.jpg");
    this.formulausevalency_I = loadImage("images/Chemistry/Formula using valency/20201130_175418.jpg");
    this.massofmolenion_I = loadImage("images/Chemistry/Mass of molecules and ions/20201130_175533.jpg");
    this.percpure_I = loadImage("images/Chemistry/Percentage Purity/20201130_175621.jpg");
    this.periodictable_I = loadImage("images/Chemistry/The Periodic Table/20201130_173854.jpg");
    this.valencyofelement_I = loadImage("images/Chemistry/Valency of elements/20201130_175145.jpg");
  }

  loadBiologyImages() {
    this.activetrans_I = loadImage("Bio img/Actice Transport.PNG");
    this.animalnplant_I = loadImage("Bio img/Animal and Plant Cell.PNG");
    this.balanceddietnmal_I = loadImage("Bio img/Balanced Diet and Malnutrition.PNG");
    this.cellmembrane_I = loadImage("Bio img/Cell Membranes.PNG");
    this.cells_I = loadImage("Bio img/Cells Summary.PNG");
    this.chromosome_I = loadImage("Bio img/Chromosome.PNG");
    this.classification_I = loadImage("Bio img/Classification of organisms.PNG");
    this.defforinherit_I = loadImage("Bio img/Definations for In heritance.PNG");
    this.diffusion_I = loadImage("Bio img/Diffusion.PNG");
    this.dna_I = loadImage("Bio img/DNA.PNG");
    this.effectofmal_I = loadImage("Bio img/Effects of Malnutrition.PNG");
    this.femalerepro_I = loadImage("Bio img/Female reproductive system.PNG");
    this.gene_I = loadImage("Bio img/Gene.PNG");
    this.impnutrients_I = loadImage("Bio img/Important Nutrients.PNG");
    this.inheritofblood_I = loadImage("Bio img/Inheritance of blood group.PNG");
    this.malerepro_I = loadImage("Bio img/Male Reproductive system.PNG");
    this.monondicot_I = loadImage("Bio img/Monocot and Dicot.PNG");
    this.osmosis_I = loadImage("Bio img/Osmosis.PNG");
    this.sumofclass_I = loadImage("Bio img/Summary of Classification.PNG");
    this.typeofrepro_I = loadImage("Bio img/Types of  Reproduction.PNG");
  }

  /* hide() {
    this.greeting.hide();
    this.button.hide();
    //this.input.hide();
    this.title.hide();
  } */

  //function to hide Subject button
  hideSubButtons() {
    this.biologyB.hide();
    this.chemistryB.hide();
    this.physicsB.hide();
    this.mathsB.hide();
    // this.back.hide();
  }

  //function to show Subject button
  showSubButtons() {
    this.biologyB.show();
    this.chemistryB.show();
    this.physicsB.show();
    this.mathsB.show();
    // this.back.hide();
  }

  //function to show individual subject buttons
  showMathButtons() {
    this.anglePropB.show();
    this.areaandperiB.show();
    this.congruencyandtriB.show();
    this.difftypeofgraphB.show();
    this.exponentsB.show();
    this.expressionsB.show();
    this.fractionsB.show();
    this.measurementsB.show();
    this.polygonsB.show();
    this.propof2dB.show();
    this.propof3dB.show();
    this.sequencesB.show();
    this.setsandsubsetsB.show();
    this.solvsimultequatB.show();
    this.squaresandcubeB.show();
    this.symmof2dB.show();
    this.numbsysB.show();
    this.trignometryB.show();
  }

  showPhysicsButtons() {
    this.accelarationB.show();
    this.compresgasB.show();
    this.densityB.show();
    this.efficiencyB.show();
    this.energynstatechangeB.show();
    this.energyntempchangeB.show();
    this.forceB.show();
    this.gpeB.show();
    this.keB.show();
    this.momentofforceB.show();
    this.momentumB.show();
    this.powerB.show();
    this.pressinliqB.show();
    this.pressB.show();
    this.speedofwavesB.show();
    this.speedB.show();
    this.springConstantB.show();
    this.tempB.show();
    this.weightB.show();
    this.workdoneB.show();
  }

  showChemistryButtons() {
    this.elementsdetailsB.show();
    this.energychangeinreactB.show();
    this.equaforreactB.show();
    this.formulausevalencyB.show();
    this.massofmolenionB.show();
    this.percpureB.show();
    this.periodictableB.show();
    this.valencyofelementB.show();
  }

  showBiologyButtons() {
    this.activetransB.show();
    this.animalnplantB.show();
    this.balanceddietnmalB.show();
    this.cellmembraneB.show();
    this.cellsB.show();
    this.chromosomeB.show();
    this.classificationB.show();
    this.defforinheritB.show();
    this.diffusionB.show();
    this.dnaB.show();
    this.effectofmalB.show();
    this.femalereproB.show();
    this.geneB.show();
    this.impnutrientsB.show();
    this.inheritofbloodB.show();
    this.malereproB.show();
    this.monondicotB.show();
    this.osmosisB.show();
    this.sumofclassB.show();
    this.typeofreproB.show();
  }



  //funtion to hide individual subject Buttons
  hideMathButtons() {
    this.anglePropB.hide();
    this.areaandperiB.hide();
    this.congruencyandtriB.hide();
    this.difftypeofgraphB.hide();
    this.exponentsB.hide();
    this.expressionsB.hide();
    this.fractionsB.hide();
    this.measurementsB.hide();
    this.polygonsB.hide();
    this.propof2dB.hide();
    this.propof3dB.hide();
    this.sequencesB.hide();
    this.setsandsubsetsB.hide();
    this.solvsimultequatB.hide();
    this.squaresandcubeB.hide();
    this.symmof2dB.hide();
    this.numbsysB.hide();
    this.trignometryB.hide();
  }

  hidePhysicsButtons() {
    this.accelarationB.hide();
    this.compresgasB.hide();
    this.densityB.hide();
    this.efficiencyB.hide();
    this.energynstatechangeB.hide();
    this.energyntempchangeB.hide();
    this.forceB.hide();
    this.gpeB.hide();
    this.keB.hide();
    this.momentofforceB.hide();
    this.momentumB.hide();
    this.powerB.hide();
    this.pressinliqB.hide();
    this.pressB.hide();
    this.speedofwavesB.hide();
    this.speedB.hide();
    this.springConstantB.hide();
    this.tempB.hide();
    this.weightB.hide();
    this.workdoneB.hide();
  }

  hideChemistryButtons() {
    this.elementsdetailsB.hide();
    this.energychangeinreactB.hide();
    this.equaforreactB.hide();
    this.formulausevalencyB.hide();
    this.massofmolenionB.hide();
    this.percpureB.hide();
    this.periodictableB.hide();
    this.valencyofelementB.hide();
  }

  hideBiologyButtons() {
    this.activetransB.hide();
    this.animalnplantB.hide();
    this.balanceddietnmalB.hide();
    this.cellmembraneB.hide();
    this.cellsB.hide();
    this.chromosomeB.hide();
    this.classificationB.hide();
    this.defforinheritB.hide();
    this.diffusionB.hide();
    this.dnaB.hide();
    this.effectofmalB.hide();
    this.femalereproB.hide();
    this.geneB.hide();
    this.impnutrientsB.hide();
    this.inheritofbloodB.hide();
    this.malereproB.hide();
    this.monondicotB.hide();
    this.osmosisB.hide();
    this.sumofclassB.hide();
    this.typeofreproB.hide();
  }

  //function to display individual subject topics
  positionMathTopics() {
    this.anglePropB.position(displayWidth / 2 - 300, displayHeight / 2 - 250);
    this.areaandperiB.position(displayWidth / 2 - 300, displayHeight / 2 - 220);
    this.congruencyandtriB.position(displayWidth / 2 - 300, displayHeight / 2 - 190);
    this.difftypeofgraphB.position(displayWidth / 2 - 300, displayHeight / 2 - 160);
    this.exponentsB.position(displayWidth / 2 - 300, displayHeight / 2 - 130);
    this.expressionsB.position(displayWidth / 2 - 300, displayHeight / 2 - 100);
    this.fractionsB.position(displayWidth / 2 - 300, displayHeight / 2 - 70);
    this.measurementsB.position(displayWidth / 2 - 300, displayHeight / 2 - 40);
    this.polygonsB.position(displayWidth / 2 - 300, displayHeight / 2 - 10);

    this.propof2dB.position(displayWidth / 2, displayHeight / 2 - 250);
    this.propof3dB.position(displayWidth / 2, displayHeight / 2 - 220);
    this.sequencesB.position(displayWidth / 2, displayHeight / 2 - 190);
    this.setsandsubsetsB.position(displayWidth / 2, displayHeight / 2 - 160);
    this.solvsimultequatB.position(displayWidth / 2, displayHeight / 2 - 130);
    this.squaresandcubeB.position(displayWidth / 2, displayHeight / 2 - 100);
    this.symmof2dB.position(displayWidth / 2, displayHeight / 2 - 70);
    this.numbsysB.position(displayWidth / 2, displayHeight / 2 - 40);
    this.trignometryB.position(displayWidth / 2, displayHeight / 2 - 10);
  }

  positionPhysicsTopics() {
    this.accelarationB.position(displayWidth / 2 - 300, displayHeight / 2 - 280);
    this.compresgasB.position(displayWidth / 2 - 300, displayHeight / 2 - 250);
    this.densityB.position(displayWidth / 2 - 300, displayHeight / 2 - 220);
    this.efficiencyB.position(displayWidth / 2 - 300, displayHeight / 2 - 190);
    this.energynstatechangeB.position(displayWidth / 2 - 300, displayHeight / 2 - 160);
    this.energyntempchangeB.position(displayWidth / 2 - 300, displayHeight / 2 - 130);
    this.forceB.position(displayWidth / 2 - 300, displayHeight / 2 - 100);
    this.gpeB.position(displayWidth / 2 - 300, displayHeight / 2 - 70);
    this.keB.position(displayWidth / 2 - 300, displayHeight / 2 - 40);
    this.momentofforceB.position(displayWidth / 2 - 300, displayHeight / 2 - 10);

    this.momentumB.position(displayWidth / 2, displayHeight / 2 - 280);
    this.powerB.position(displayWidth / 2, displayHeight / 2 - 250);
    this.pressinliqB.position(displayWidth / 2, displayHeight / 2 - 220);
    this.pressB.position(displayWidth / 2, displayHeight / 2 - 190);
    this.speedofwavesB.position(displayWidth / 2, displayHeight / 2 - 160);
    this.speedB.position(displayWidth / 2, displayHeight / 2 - 130);
    this.springConstantB.position(displayWidth / 2, displayHeight / 2 - 100);
    this.tempB.position(displayWidth / 2, displayHeight / 2 - 70);
    this.weightB.position(displayWidth / 2, displayHeight / 2 - 40);
    this.workdoneB.position(displayWidth / 2, displayHeight / 2 - 10);
  }

  positionChemistryTopics() {
    this.elementsdetailsB.position(displayWidth / 2 - 300, displayHeight / 2 - 220);
    this.energychangeinreactB.position(displayWidth / 2 - 300, displayHeight / 2 - 190);
    this.equaforreactB.position(displayWidth / 2 - 300, displayHeight / 2 - 160);
    this.formulausevalencyB.position(displayWidth / 2 - 300, displayHeight / 2 - 130);

    this.massofmolenionB.position(displayWidth / 2, displayHeight / 2 - 220);
    this.percpureB.position(displayWidth / 2, displayHeight / 2 - 190);
    this.periodictableB.position(displayWidth / 2, displayHeight / 2 - 160);
    this.valencyofelementB.position(displayWidth / 2, displayHeight / 2 - 130);
  }

  positionBiologyTopics() {
    this.activetransB.position(displayWidth / 2 - 300, displayHeight / 2 - 280);
    this.animalnplantB.position(displayWidth / 2 - 300, displayHeight / 2 - 250);
    this.balanceddietnmalB.position(displayWidth / 2 - 300, displayHeight / 2 - 220);
    this.cellmembraneB.position(displayWidth / 2 - 300, displayHeight / 2 - 190);
    this.cellsB.position(displayWidth / 2 - 300, displayHeight / 2 - 160);
    this.chromosomeB.position(displayWidth / 2 - 300, displayHeight / 2 - 130);
    this.classificationB.position(displayWidth / 2 - 300, displayHeight / 2 - 100);
    this.defforinheritB.position(displayWidth / 2 - 300, displayHeight / 2 - 70);
    this.diffusionB.position(displayWidth / 2 - 300, displayHeight / 2 - 40);
    this.dnaB.position(displayWidth / 2 - 300, displayHeight / 2 - 10);

    this.effectofmalB.position(displayWidth / 2, displayHeight / 2 - 280);
    this.femalereproB.position(displayWidth / 2, displayHeight / 2 - 250);
    this.geneB.position(displayWidth / 2, displayHeight / 2 - 220);
    this.impnutrientsB.position(displayWidth / 2, displayHeight / 2 - 190);
    this.inheritofbloodB.position(displayWidth / 2, displayHeight / 2 - 160);
    this.malereproB.position(displayWidth / 2, displayHeight / 2 - 130);
    this.monondicotB.position(displayWidth / 2, displayHeight / 2 - 100);
    this.osmosisB.position(displayWidth / 2, displayHeight / 2 - 70);
    this.sumofclassB.position(displayWidth / 2, displayHeight / 2 - 40);
    this.typeofreproB.position(displayWidth / 2, displayHeight / 2 - 10);
  }


  //loading individual subject topics
  loadMathButtons() {
    this.anglePropB = createButton('Angle Properties');
    this.areaandperiB = createButton('Area and Perimeter of 2D shapes');
    this.congruencyandtriB = createButton('Congruencey and Triangles');
    this.difftypeofgraphB = createButton('Different Types of Graphs');
    this.exponentsB = createButton('Exponents(indices)');
    this.expressionsB = createButton('Expressions');
    this.fractionsB = createButton('Fractions');
    this.measurementsB = createButton('Measurements');
    this.polygonsB = createButton('Polygons');

    this.propof2dB = createButton('Properties of 2D Shapes');
    this.propof3dB = createButton('Properties of 3D Shapes');
    this.sequencesB = createButton('Sequences');
    this.setsandsubsetsB = createButton('Sets and Subsets');
    this.solvsimultequatB = createButton('Solving Simultaneous Equations');
    this.squaresandcubeB = createButton('Squares and Cubes');
    this.symmof2dB = createButton('Symmetry of 2d Shapes');
    this.numbsysB = createButton('The Number System');
    this.trignometryB = createButton('Trignometry');

    //styling math buttons
    this.anglePropB.style('font-size', '15px');
    this.anglePropB.style('background-color', color(200, 50, 50));
    this.anglePropB.style('font-family', 'Century');

    this.areaandperiB.style('font-size', '15px');
    this.areaandperiB.style('background-color', color(200, 100, 50));
    this.areaandperiB.style('font-family', 'Century');

    this.congruencyandtriB.style('font-size', '15px');
    this.congruencyandtriB.style('background-color', color(200, 200, 50));
    this.congruencyandtriB.style('font-family', 'Century');

    this.difftypeofgraphB.style('font-size', '15px');
    this.difftypeofgraphB.style('background-color', color(200, 200, 100));
    this.difftypeofgraphB.style('font-family', 'Century');

    this.exponentsB.style('font-size', '15px');
    this.exponentsB.style('background-color', color(100, 180, 100));
    this.exponentsB.style('font-family', 'Century');

    this.expressionsB.style('font-size', '15px');
    this.expressionsB.style('background-color', color(50, 200, 100));
    this.expressionsB.style('font-family', 'Century');

    this.fractionsB.style('font-size', '15px');
    this.fractionsB.style('background-color', color(50, 200, 50));
    this.fractionsB.style('font-family', 'Century');

    this.measurementsB.style('font-size', '15px');
    this.measurementsB.style('background-color', color(50, 200, 10));
    this.measurementsB.style('font-family', 'Century');

    this.polygonsB.style('font-size', '15px');
    this.polygonsB.style('background-color', color(0, 200, 200));
    this.polygonsB.style('font-family', 'Century');

    this.propof2dB.style('font-size', '15px');
    this.propof2dB.style('background-color', color(0, 0, 255));
    this.propof2dB.style('font-family', 'Century');

    this.propof3dB.style('font-size', '15px');
    this.propof3dB.style('background-color', color(0, 150, 150));
    this.propof3dB.style('font-family', 'Century');

    this.sequencesB.style('font-size', '15px');
    this.sequencesB.style('background-color', color(50, 200, 200));
    this.sequencesB.style('font-family', 'Century');

    this.setsandsubsetsB.style('font-size', '15px');
    this.setsandsubsetsB.style('background-color', color(155, 10, 100));
    this.setsandsubsetsB.style('font-family', 'Century');

    this.solvsimultequatB.style('font-size', '15px');
    this.solvsimultequatB.style('background-color', color(200, 10, 100));
    this.solvsimultequatB.style('font-family', 'Century');

    this.squaresandcubeB.style('font-size', '15px');
    this.squaresandcubeB.style('background-color', color(255, 10, 100));
    this.squaresandcubeB.style('font-family', 'Century');

    this.symmof2dB.style('font-size', '15px');
    this.symmof2dB.style('background-color', color(200, 50, 50));
    this.symmof2dB.style('font-family', 'Century');

    this.numbsysB.style('font-size', '15px');
    this.numbsysB.style('background-color', color(250, 50, 50));
    this.numbsysB.style('font-family', 'Century');

    this.trignometryB.style('font-size', '15px');
    this.trignometryB.style('background-color', color(250, 0, 0));
    this.trignometryB.style('font-family', 'Century');
  }

  loadPhysicsButtons() {
    this.accelarationB = createButton('Accelaration');
    this.compresgasB = createButton('Compressing Gases');
    this.densityB = createButton('Density');
    this.efficiencyB = createButton('Efficiency');
    this.energynstatechangeB = createButton('Energy and State Change');
    this.energyntempchangeB = createButton('Energy and Temperature Change');
    this.forceB = createButton('Force');
    this.gpeB = createButton('Gravitational Potential Energy');
    this.keB = createButton('Kinetic Energy');
    this.momentofforceB = createButton('Moment of Force');
    this.momentumB = createButton('Momentum');
    this.powerB = createButton('Power');
    this.pressinliqB = createButton('Pessure in Liquids');
    this.pressB = createButton('Pressure');
    this.speedofwavesB = createButton('Speed of Waves');
    this.speedB = createButton('Speed');
    this.springConstantB = createButton('Spring Constant');
    this.tempB = createButton('Temperature');
    this.weightB = createButton('Weight');
    this.workdoneB = createButton('Work Done');

    //Stling physics buttons
    this.accelarationB.style('font-size', '15px');
    this.accelarationB.style('background-color', color(200, 50, 50));
    this.accelarationB.style('font-family', 'Century');

    this.compresgasB.style('font-size', '15px');
    this.compresgasB.style('background-color', color(200, 100, 50));
    this.compresgasB.style('font-family', 'Century');

    this.densityB.style('font-size', '15px');
    this.densityB.style('background-color', color(200, 200, 50));
    this.densityB.style('font-family', 'Century');

    this.efficiencyB.style('font-size', '15px');
    this.efficiencyB.style('background-color', color(200, 200, 100));
    this.efficiencyB.style('font-family', 'Century');

    this.energynstatechangeB.style('font-size', '15px');
    this.energynstatechangeB.style('background-color', color(100, 180, 100));
    this.energynstatechangeB.style('font-family', 'Century');

    this.energyntempchangeB.style('font-size', '15px');
    this.energyntempchangeB.style('background-color', color(50, 200, 100));
    this.energyntempchangeB.style('font-family', 'Century');

    this.forceB.style('font-size', '15px');
    this.forceB.style('background-color', color(50, 200, 50));
    this.forceB.style('font-family', 'Century');

    this.gpeB.style('font-size', '15px');
    this.gpeB.style('background-color', color(50, 200, 10));
    this.gpeB.style('font-family', 'Century');

    this.keB.style('font-size', '15px');
    this.keB.style('background-color', color(0, 200, 200));
    this.keB.style('font-family', 'Century');

    this.momentofforceB.style('font-size', '15px');
    this.momentofforceB.style('background-color', color(0, 0, 255));
    this.momentofforceB.style('font-family', 'Century');

    this.momentumB.style('font-size', '15px');
    this.momentumB.style('background-color', color(0, 150, 150));
    this.momentumB.style('font-family', 'Century');

    this.powerB.style('font-size', '15px');
    this.powerB.style('background-color', color(50, 200, 200));
    this.powerB.style('font-family', 'Century');

    this.pressinliqB.style('font-size', '15px');
    this.pressinliqB.style('background-color', color(155, 10, 100));
    this.pressinliqB.style('font-family', 'Century');

    this.pressB.style('font-size', '15px');
    this.pressB.style('background-color', color(200, 10, 100));
    this.pressB.style('font-family', 'Century');

    this.speedofwavesB.style('font-size', '15px');
    this.speedofwavesB.style('background-color', color(255, 10, 100));
    this.speedofwavesB.style('font-family', 'Century');

    this.speedB.style('font-size', '15px');
    this.speedB.style('background-color', color(200, 50, 50));
    this.speedB.style('font-family', 'Century');

    this.springConstantB.style('font-size', '15px');
    this.springConstantB.style('background-color', color(250, 50, 50));
    this.springConstantB.style('font-family', 'Century');

    this.tempB.style('font-size', '15px');
    this.tempB.style('background-color', color(250, 0, 0));
    this.tempB.style('font-family', 'Century');

    this.weightB.style('font-size', '15px');
    this.weightB.style('background-color', color(250, 50, 0));
    this.weightB.style('font-family', 'Century');

    this.workdoneB.style('font-size', '15px');
    this.workdoneB.style('background-color', color(250, 100, 0));
    this.workdoneB.style('font-family', 'Century');
  }

  loadChemistryButtons() {
    this.elementsdetailsB = createButton('Elements Details');
    this.energychangeinreactB = createButton('Energy Changes in Reactions');
    this.equaforreactB = createButton('Equation for a Reaction');
    this.formulausevalencyB = createButton('Formula using Valency');
    this.massofmolenionB = createButton('Mass of Molecules and Ions');
    this.percpureB = createButton('Percentage Purity');
    this.periodictableB = createButton('The Periodic Table');
    this.valencyofelementB = createButton('Valency of Elements');

    //Stling chemistry buttons
    this.elementsdetailsB.style('font-size', '15px');
    this.elementsdetailsB.style('background-color', color(200, 50, 50));
    this.elementsdetailsB.style('font-family', 'Century');

    this.energychangeinreactB.style('font-size', '15px');
    this.energychangeinreactB.style('background-color', color(200, 100, 50));
    this.energychangeinreactB.style('font-family', 'Century');

    this.equaforreactB.style('font-size', '15px');
    this.equaforreactB.style('background-color', color(200, 200, 50));
    this.equaforreactB.style('font-family', 'Century');

    this.equaforreactB.style('font-size', '15px');
    this.equaforreactB.style('background-color', color(200, 200, 100));
    this.equaforreactB.style('font-family', 'Century');

    this.formulausevalencyB.style('font-size', '15px');
    this.formulausevalencyB.style('background-color', color(100, 180, 100));
    this.formulausevalencyB.style('font-family', 'Century');

    this.massofmolenionB.style('font-size', '15px');
    this.massofmolenionB.style('background-color', color(50, 200, 100));
    this.massofmolenionB.style('font-family', 'Century');

    this.percpureB.style('font-size', '15px');
    this.percpureB.style('background-color', color(50, 200, 50));
    this.percpureB.style('font-family', 'Century');

    this.periodictableB.style('font-size', '15px');
    this.periodictableB.style('background-color', color(50, 200, 10));
    this.periodictableB.style('font-family', 'Century');

    this.valencyofelementB.style('font-size', '15px');
    this.valencyofelementB.style('background-color', color(0, 200, 200));
    this.valencyofelementB.style('font-family', 'Century');

  }

  loadBiologyButtons() {
    this.activetransB = createButton('Active Transport');
    this.animalnplantB = createButton('Animal and PLant Cell');
    this.balanceddietnmalB = createButton('Balanced Diet and Malnutrition');
    this.cellmembraneB = createButton('Cell Membrane');
    this.cellsB = createButton('Cells');
    this.chromosomeB = createButton('Chromosome');
    this.classificationB = createButton('Classification');
    this.defforinheritB = createButton('Defination for Inheritance');
    this.diffusionB = createButton('Diffusion');
    this.dnaB = createButton('DNA');
    this.effectofmalB = createButton('Effects of Malnutrition');
    this.femalereproB = createButton('Female Reproductive Organs');
    this.geneB = createButton('Gene');
    this.impnutrientsB = createButton('Important Nutrients');
    this.inheritofbloodB = createButton('Inheritance of Blood Group');
    this.malereproB = createButton('Male reproductive organs');
    this.monondicotB = createButton('Monocotyledons and Dicotyledons plant');
    this.osmosisB = createButton('Osmosis');
    this.sumofclassB = createButton('Summary of Classification');
    this.typeofreproB = createButton('Types of Repro');

    //Stling biology buttons
    this.activetransB.style('font-size', '15px');
    this.activetransB.style('background-color', color(200, 50, 50));
    this.activetransB.style('font-family', 'Century');

    this.animalnplantB.style('font-size', '15px');
    this.animalnplantB.style('background-color', color(200, 100, 50));
    this.animalnplantB.style('font-family', 'Century');

    this.balanceddietnmalB.style('font-size', '15px');
    this.balanceddietnmalB.style('background-color', color(200, 200, 50));
    this.balanceddietnmalB.style('font-family', 'Century');

    this.cellmembraneB.style('font-size', '15px');
    this.cellmembraneB.style('background-color', color(200, 200, 100));
    this.cellmembraneB.style('font-family', 'Century');

    this.cellmembraneB.style('font-size', '15px');
    this.cellmembraneB.style('background-color', color(100, 180, 100));
    this.cellmembraneB.style('font-family', 'Century');

    this.cellsB.style('font-size', '15px');
    this.cellsB.style('background-color', color(50, 200, 100));
    this.cellsB.style('font-family', 'Century');

    this.chromosomeB.style('font-size', '15px');
    this.chromosomeB.style('background-color', color(50, 200, 50));
    this.chromosomeB.style('font-family', 'Century');

    this.classificationB.style('font-size', '15px');
    this.classificationB.style('background-color', color(50, 200, 10));
    this.classificationB.style('font-family', 'Century');

    this.defforinheritB.style('font-size', '15px');
    this.defforinheritB.style('background-color', color(0, 200, 200));
    this.defforinheritB.style('font-family', 'Century');

    this.diffusionB.style('font-size', '15px');
    this.diffusionB.style('background-color', color(0, 0, 255));
    this.diffusionB.style('font-family', 'Century');

    this.dnaB.style('font-size', '15px');
    this.dnaB.style('background-color', color(0, 150, 150));
    this.dnaB.style('font-family', 'Century');

    this.effectofmalB.style('font-size', '15px');
    this.effectofmalB.style('background-color', color(50, 200, 200));
    this.effectofmalB.style('font-family', 'Century');

    this.femalereproB.style('font-size', '15px');
    this.femalereproB.style('background-color', color(155, 10, 100));
    this.femalereproB.style('font-family', 'Century');

    this.geneB.style('font-size', '15px');
    this.geneB.style('background-color', color(200, 10, 100));
    this.geneB.style('font-family', 'Century');

    this.impnutrientsB.style('font-size', '15px');
    this.impnutrientsB.style('background-color', color(255, 10, 100));
    this.impnutrientsB.style('font-family', 'Century');

    this.inheritofbloodB.style('font-size', '15px');
    this.inheritofbloodB.style('background-color', color(200, 50, 50));
    this.inheritofbloodB.style('font-family', 'Century');

    this.malereproB.style('font-size', '15px');
    this.malereproB.style('background-color', color(250, 50, 50));
    this.malereproB.style('font-family', 'Century');

    this.monondicotB.style('font-size', '15px');
    this.monondicotB.style('background-color', color(250, 0, 0));
    this.monondicotB.style('font-family', 'Century');

    this.osmosisB.style('font-size', '15px');
    this.osmosisB.style('background-color', color(250, 50, 0));
    this.osmosisB.style('font-family', 'Century');

    this.sumofclassB.style('font-size', '15px');
    this.sumofclassB.style('background-color', color(250, 100, 0));
    this.sumofclassB.style('font-family', 'Century');
  }
}
