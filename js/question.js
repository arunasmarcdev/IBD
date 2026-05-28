

// Array of Objects
//question 60-316 get from IBD 2022
//question 317-... website
const quiz = [
  {
    q: '1. Burtonisation or Water Treatment for brewing Ales involves the addition of:',
    options: ['calcium carbonate', 'calcium sulphate', 'sodium chloride', 'zinc sulphate'],
    answer: 1
  },
  {
    q: '2. Which of the following beer "attributes" is provided by hop oils?',
    options: ['improved foam appearance', 'increase in beer bitterness', 'antimicrobial activity', 'floral or spicy aroma'],
    answer: 3
  },
  {
    q: '3. Which of the following statements most accurately describes a pale ale?',
    options: ['Uses pale poorly modified and lightly kilned malt with relatively low bitterness and bottom fermenting yeast', 'Uses well modified malt and quite high bitterness with top cropping yeast', 'Uses a high proportion of malted wheat instead of malted barley low bitterness and top cropping yeast', 'Uses dark roasted malt or barley to produce richly flavoured dark beer with higher hop addition and top cropping yeast'],
    answer: 1
  },
  {
    q: '4. What is the typical specification of % nitrogen for barley suitable for ale brewing?',
    options: ['1.4 to 1.6% nitrogen', '1.7 to 1.9% nitrogen', '2.4 to 2.6% nitrogen', '2.4 to 2.6% nitrogen'],
    answer: 0
  },
  {
    q: '5. A typical grist composition for a lauter tun would be:',
    options: ['Husk <1%, Coarse Grits 9%, Fine Grits 55%, Flour >35%', 'Husk 20%, Coarse Grits 45%, Fine Grits 25%, Flour 10%', 'Husk 30%, Coarse Grits 24%, Fine Grits 40%, Flour 6%', 'Husk 25%, Coarse Grits 10%, Fine Grits 40%, Flour 25%'],
    answer: 2
  },
  {
    q: '6. Identify structure D from the diagram below',
    options: ['Rootlets', 'Acrospire', 'Aleurone', 'Endosperm'],
    answer: 3,
    img: 'img/endosperm.jpg'
  },
  {
    q: '7. The following description of brewing water would be good to brew which style of beer?',
    options: ['Pilsner', 'Pale ale', 'Stout', 'Bitter'],
    answer: 2,
    img: 'img/stout.jpg'
  },
  {
    q: '8. Which of the following mills are paired with the best mash separation system?',
    options: ['6 Roller Mill - Mash Filter', 'Hammer Mill - Mash Tun', 'Wet Mill - Mash Tun', '6 Roller Mill - Lauter Tun'],
    answer: 3,
  },
  //{
  // q:'9. Which of the TWO following enzymes are mainly responsible for breaking down starch during mash conversion?',
  // options:['Alpha amylase','Beta Glucanase','Beta Amylase','Limit Dextrinase','Amyloglucosidase'],
  //answer:0,   
  //},
  {
    q: '10. What is the bitterness of a 500 hl of beer bittered with 20 kg hops with 50% utilisation and 10% alpha acid: (calculate to the nearest whole number)',
    options: ['15 BU', '20 BU', '25 BU', '30 BU'],
    answer: 1,
  },
  {
    q: '11. Which of the following type of finings can be added to boiled wort to aid clarification?',
    options: ['Isinglass finings', 'Carrageenan', 'Auxiliary finings', 'Calcium sulphate'],
    answer: 1,
  },
  {
    q: '12.Which of the following system is used to separate pelletised hops from wort after boiling',
    options: ['Whirlpool', 'Hop back', 'Hop strainer', 'Hop seed filter'],
    answer: 0,
  },
  {
    q: '13. Which of the following brewing stages is likely to result in high DMS build up in wort?',
    options: ['Mashing stand', 'Yeast storage', 'Wort boiling', 'Whirlpool'],
    answer: 3,
  },
  {
    q: '14. What is the typical collection temperature for lager fermentation?',
    options: ['2 to 4 C', '6 to 8 C', '10 to 12 C', '14 to 16 C'],
    answer: 2,
  },
  {
    q: '15. Which of the following methods is usually used to follow the progress of a fermentation?',
    options: ['The number of yeast cells', 'The amount of heat generated', 'The level of diacetyl formed', 'The fall in wort gravity'],
    answer: 3,
  },
  {
    q: '16.Mineral salt Calcium is important during fermentation in order to promote',
    options: ['flocculation', 'haze stability', 'enzyme stability', 'The level of diacetyl formed'],
    answer: 0,
  },
  {
    q: '17.The cone on a cylindro-conical fermentation vessel is designed to encourage',
    options: ['The separation and collection of yeast', 'Reduce turbulence when filling', 'Allow drainage of CIP', 'Make sampling easier'],
    answer: 0,
  },
  {
    q: '18. Why would it be dangerous to enter a recently emptied dirty fermentation vessel?',
    options: ['there could be residual alcohol vapours', 'there is a danger that the tank could start CIP', 'the residual yeast at the bottom of the tank could cause slips', 'high concentration of carbon dioxide might be present'],
    answer: 3,
  },
  {
    q: '19. Why is it necessary to stain yeast with methylene blue?',
    options: ['To help to see the cells under the microscope', 'To measure the number of yeast cells', 'To measure the number of viable yeast cells', 'To help identified any wild yeast'],
    answer: 2,
  },
  {
    q: '20. During fermentation what is the correct order of yeast growth?',
    options: ['Lag - Growth - Stationary - Settlement', 'Growth - Lag - Stationary - Settlement', 'Settlement - Growth - Stationary - Lag', 'Lag - Growth - Settlement - Stationary'],
    answer: 0,
  },
  {
    q: '21. When cropping yeast it is necessary to ensure that the crop is representative',
    options: ['maximise the yeast crop', 'To maintain yeast hygiene', 'To accelerate collection', 'To maintain yeast age profile'],
    answer: 3,
  },
  {
    q: '22. Yeast propagation is introduced to......:',
    options: ['Increase the amount of yeast available', 'Reduce mutants and infection', 'Increase the proportion of old yeast cells', 'Reduce the rate of diacetyl production'],
    answer: 1,
  },
  {
    q: '23. Home much additional yeast has to be added to compensate for a lower viability 80% when pitching 100 hl with a specification of adding 0.5 litres/hl of yeast with a target viability of 90%',
    options: ['0 litres', '6.25 litres', '8.60 litres', '11.25 litres'],
    answer: 1,
  },
  {
    q: '24. Which of the following two materials may form a haze in beer, in the presence of oxygen?',
    options: ['Lipids and proteins', 'Yeast and tannins', 'Lipids and yeast', 'Proteins and tannins'],
    answer: 3,
  },
  {
    q: '25. Which of the following stabilising agents removes "Polyphenols"?',
    options: ['Silica hydrogel', 'Tannic Acid', 'Polyvinyl Polypyrroldone (PVPP)', 'Proteolytic enzyme (Papain)'],
    answer: 2,
  },
  {
    q: '26. Beer should not be allowed to warm up between cold maturation & filtration in order to',
    options: ['prevent haze break from re-dissolving', 'avoid starch carry over', 'reduce the viscosity of beer before filtration', 're-suspend oxalic acid crystals'],
    answer: 0,
  },
  {
    q: '27. The type of water should be used for high gravity dilution is:',
    options: ['de-aerated service water', 'standard product water', 'standard process water', 'de-aerated product water'],
    answer: 3,
  },
  {
    q: '28. The maximum level for dissolved oxygen in bright beer that is accepted as good practice is',
    options: ['0.01 mg/ml', '0.05 mg/l', '0.50 g/l', '1.00 mg/l'],
    answer: 1,
  },
  {
    q: '29. The "alcohol by volume" of 200 hl of high gravity beer required to produce 300 hectolitres of beer at an alcohol by volume of 4.0% is: n(assume no beer losses)',
    options: ['8%', '7%', '6%', '5%'],
    answer: 2,
  },
  {
    q: '30. Which of the following description applies to a low carbohydrate or Light beer?',
    options: ['Dark beer with roast and bitter notes', 'A beer where all the sugar are turn to alcohol', 'Clear light coloured delectate malty beer with low bitterness', 'Light cloudy beer with a clove fruit flavour'],
    answer: 1,
  },
  {
    q: '31. Which of the following is a process specification?',
    options: ['Final gravity (degrees sacc.)', 'Total in package oxygen (ppm)', 'Minimum maturation time (hours)', 'Beer Colour (EBC)'],
    answer: 2,
  },
  {
    q: '32. A control chart is most effective for showing which type of the data?',
    options: ['A control chart is most effective for showing which type of the data?', 'Showing trends of an analytical parameter', 'Cost of production in each department', 'Pore sizes in a sterile filter membrane'],
    answer: 1,
  },
  {
    q: '33. Pore sizes in a sterile filter membrane',
    options: ['Pore sizes in a sterile filter membrane', 'tasting three samples which are all different', 'tasting three samples; two the same and one different', 'representatives from three breweries tasting the same beer'],
    answer: 2,
  },
  {
    q: '34. Beer is returned with an acetaldehyde (Sour apple) taste taint What is the probable cause of this flavour fault?',
    options: ['Contamination of beer by caustic', 'Infected beer by bacteria or wild yeast', 'Contaminant of beer with chlorine based sterilant', 'Contaminant with ammonia refrigerant'],
    answer: 1,
  },
  {
    q: '35. Dissolved oxygen is detrimental to final beer quality because it can cause',
    options: ['the beer to develop an unpleasant sulphury aroma (light struck)', 'the beer to over-foam', 'cardboard and papery flavours as well as haze', 'the colour of the beer to darken'],
    answer: 2,
  },
  {
    q: '36. An example of an oxygen scavenger is:',
    options: ['Poly glycol alginate', 'Ascorbic acid', 'Nitrogen gas', 'Kettle finings'],
    answer: 1,
  },
  {
    q: '37. Which of the following microscopic images most closely resembles the beer-spoilage organism "OBESIUM BACTERIA":',
    options: ['A', 'B', 'C', 'D'],
    answer: 0,
    img: 'img/obesium bacteria.jpg'
  },
  {
    q: '38. One characteristic of pathogens organism (harmful bacteria) is that they:',
    options: ['only grow in beers with high alcohol content:', 'cannot grow in water', 'cannot grow in beer', 'only grow in lagers'],
    answer: 2,
  },
  {
    q: '39. When taking a sample for microbiological analysis, it is important to ensure that the sample is:',
    options: ['taken at 0oC', 'acidified immediately upon receipt into the laboratory', 'taken aseptically', 'autoclaved immediately upon receipt into the laboratory'],
    answer: 2,
  },
  {
    q: '40. Enterobacter is a source of quality problems in brewing because it...',
    options: ['its a standard beer spoilage organism', 'produces off flavours in wort', 'reduces oxygen in wort', 'indicate water pollution'],
    answer: 3,
  },
  {
    q: '41. Which of the following sample points can be sterilised (CIP) in place.',
    options: ['Continuous membrane filter ', 'Sample tap on vessel', 'Membrane sample in tank', 'Sampling through tank door'],
    answer: 2,
  },
  {
    q: '42. One of the benefits of a Quality System is that',
    options: ['operations are carried out according to traditional methods', 'operations are carried out in the quickest method possible', 'operations are carried out according to defined procedures', 'operations can be carried out by untrained personnel'],
    answer: 2,
  },
  {
    q: '43. Only one of the following statements is true. Which is it? Documented procedures are there to:',
    options: ['be referred to during audits', 'explain to visitors how the brewery is operated', 'explain to suppliers why the brewery has set a particular', 'explain what has to be done, when and how it should be done'],
    answer: 3,
  },
  //{
  //q:'44. Choose from the following list the TWO best combination of properties for formulated brewery detergent ?',
  //options:['toxic and dangerous to operator','active against target soil','corrosive against plant cleaned','stable in storage','difficult to rinse'],
  //answer:1,3
  //},
  {
    q: '45. Which of the following methods is used for rapid determination of the hygiene of a tank?',
    options: ['Plating rinse water samples', 'Swabbing and plating sample', 'Visual inspection', 'Swabbing and bioluminescence'],
    answer: 3,
  },
  {
    q: '46. In a formulated detergent what is the function of a detergent compound?',
    options: ['Materials which can complex metal ions in solution, thereby preventing precipitation of the insoluble salts of the metal ions', 'A material which can be used to reduce surface tension (wetting), the surface', 'Active and dissolves organic soil', 'A material which assists the rinsing of the detergent from the surface of the vessel'],
    answer: 2,
  },
  {
    q: '47. Which pump below would be the easiest to CIP (clean)?',
    options: ['A', 'B', 'C', 'D'],
    answer: 3,
    img: 'img/centrifulgal.jpg'
  },
  {
    q: '48. Which of the following is best suited to cleaning a bright beer tank under CO2 top pressure?',
    options: ['Phosphoric acid', 'Caustic soda', 'Sodium hypochlorite', 'Peracetic acid'],
    answer: 0,
  },
  {
    q: '49. A safety risk associated with strong oxidising agent is that....:',
    options: ['A fire hazard', 'Scavenge oxygen from atmosphere', 'Corrosive when dilute', 'Degrade seals and hoses'],
    answer: 0,
  },
  {
    q: '50. Which of the following is NOT a feature of conditioning monitoring?',
    options: ['Oil analysis', 'Failure mode analysis', 'Vibration analysis', 'Thermal imaging'],
    answer: 1,
  },
  {
    q: '51. The main function of a Management Review system is:',
    options: ['To identify way to reduce quality failures', 'To establish the number of quality failures in the brewery', 'To make sure that all the brewery quality standards are being met', 'To identify the people responsible for the failures'],
    answer: 0,
  },
  {
    q: '52. Which effluent measurement is used to evaluate the amount of work required in a effluent treatment plant?',
    options: ['Flow rate', 'Temperature', 'Volume', 'COD'],
    answer: 3,
  },
  {
    q: '53. Which of the following treatments are required for water to be used as process water?',
    options: ['Removal of sulphates', 'Removal of bi- carbonates', 'Removal of chlorides', 'Removal of calcium'],
    answer: 1,
  },
  {
    q: '54. When is it the best time to tour the brewery looking for process gas leaks?',
    options: ['During peak production', 'During CIP', 'During shut down', 'Anytime'],
    answer: 2,
  },
  {
    q: '55. Which of the following property of carbon dioxide is incorrect?',
    options: ['It is colourless', 'It asphyxiates', 'It is toxic at high levels', 'It is lighter than air'],
    answer: 3,
  },
  {
    q: '56. If a brewery exceeds its pH effluent limit what steps can be taken to reduce total effluent pH?',
    options: ['Reduce pre & post rinse volumes', 'Concentrate all cleaning into one time', 'Recycle and clean up detergent', 'Bubble Carbon Dioxide through the collection tank'],
    answer: 3,
  },
  {
    q: '57. The most effective way of reducing water usage during CIP can be.......',
    options: ['Use pulse rinses in place of full rinse', 'Reduce number of rinses between detergents', 'Use warm water as this is more effective for rinsing', 'Control flow with flow meters to optimise use'],
    answer: 0,
  },
  {
    q: '58. Which of the following brewery process is likely to contribute most to no renewable carbon emissions?',
    options: ['Re using brewery yeast', 'Sending spent filter aid to landfill', 'Generating steam for wort boiling', 'CO2 evolution from fermentation'],
    answer: 2,
  },
  {
    q: '59. The standard ISO 14001 refers to which process?',
    options: ['Manufacturing', 'Laboratory systems', 'Health and safety', 'Environmental'],
    answer: 3,
  },

  {
    q: '60. Which malting process step releases enzymes to break down the constituents of the barley kernel? ',
    options: ['Kilning', 'Storage', 'Steeping', 'Germination'],
    answer: 3,
  },

  {
    q: '61. If you were brewing a beer that used high amounts of adjunct that contained predominantly carbohydrate and little to no husk, would tworow or six-row be a better barley choice as the base malt? ',
    options: ['Six-row: Higher malt enzyme content to convert the starch, higher protein and more husk than two-row to compensate for adjunct', 'Six-row: It is more readily available to brewers than two-row and has more extract potential, more protein, more enzymes and provides a better filter bed. during wort separation', 'Two-row: It provides more carbohydrate and extract potential', 'Two-row: Six-row is only used for feed barley'],
    answer: 0,
  },
  {
    q: '62. What is the primary reason for high gravity brewing?',
    options: ['To increase brewing capacity', 'To increase ester and higher alcohols.', 'To increase hop utilisation', 'To increase plant utilisation using adjuncts'],
    answer: 0,
  },
  {
    q: '63. What are torrified adjuncts?',
    options: ['Cereals that have been pre-gelatinised using infrared heat', 'Cereals that have been pre-gelatinised using exogenous enzymes', 'Cereals that have been pre-gelatinised using hot sand or air', 'Cereals that have been partially gelatinised through pressure-cooking or steaming'],
    answer: 2,
  },
  {
    q: '64. What is the name of the carbohydrate storage material that is used by yeast to allow them to survive periods of starvation?',
    options: ['Sterol', 'Starch', 'Glycogen', 'Cellulose'],
    answer: 2,
  },
  {
    q: '65. Which of the following statements does not apply to yeast?',
    options: ['It requires a source of chemical nutrients for growth', 'It is a eukaryotic cell', 'Is non-photosynthetic', 'It does not possess a cell wall'],
    answer: 3,
  },
  {
    q: '66. Which of the following is a critical storage parameter in prolonging the freshness of whole hops?',
    options: ['Good lighting', 'Packaged in air', '4°C storage temperature', '15°C storage temperature'],
    answer: 1,
  },
  {
    q: '67. Which of the following statements does not apply to lager yeast strains and the fermentations in which they are used?',
    options: ['Lager strains typically settle to the bottom of vessels towards the end of fermentation', 'The maximum growth temperature for lager yeast strains is 32-40°C', 'Lager yeast strains are capable of using a greater range of sugars compared to ale strains', 'Fermentations are usually controlled within the range of 18-22°C'],
    answer: 3,
  },
  {
    q: '68. To ensure the maximum amount of hop aroma, where should the hops be added?',
    options: ['In the hop back', 'At the start of wort boiling', 'Post active fermentation', 'In the whirlpool'],
    answer: 2,
  },
  {
    q: '69. Look at the following diagram of a typical yeast cell and identify which label, A,B,C or D shows a mitochondrion',
    options: ['A', 'B', 'C', 'D'],
    answer: 2,
    img: 'img/mitochondrion.jpg'
  },
  {
    q: '70. Gelatinisation is the process',
    options: ['here the starch granules swell due to water and heat which allows the starch degrading enzymes to break down the starch', 'where the starch degrading enzymes cause the starch cells to rupture in the presence of water and heat', 'where the starch degrading enzymes are denatured due to heat ensuring the starch granules break down into sugar and dissolve in ater', 'where the starch cells rupture in the presence of water and heat which then allows starch degrading enzymes to break down the starch into sugars'],
    answer: 3,
  },
  {
    q: '71. Which of the following is not an important function of the yeast cell wall?',
    options: ['It controls what enters and leaves the cell', 'It gives the cell its shape', 'It protects the cell from damage', 'It has scars which mark the point at which daughter cells were formed'],
    answer: 0,
  },
  {
    q: '72. The carbohydrates found in the starchy endosperm of barley provide',
    options: ['polyphenols that can cause haze and also increase the beer`s mouthfeel', 'sugars which the yeast then converts into alcohol, fermentation flavours and carbon dioxide', 'vitamins which are essential for yeast health and growth', 'proteins which the yeast uses to grow and helps to create and retain foam formation'],
    answer: 1,
  },
  {
    q: '73. Green malt with 50% moisture is stewed in a roasting drum at 70°C and then cured at 160°C. The final malt colour is 150 EBC with an extract of 76%. Which malt would this best describe?',
    options: ['Crystal malt', 'Munich malt', 'Amber malt', 'Vienna malt'],
    answer: 0,
  },
  {
    q: '74. Dimethyl sulphide (DMS) is produced',
    options: ['by the embryo during germination', 'by the enzymes released from the aleurone layer', 'from the conversion of S-methyl methionine (SMM) during the germination process', 'from SMM when heat is applied, such as kilning'],
    answer: 3,
  },
  {
    q: '75. What would you primarily use an activated carbon filter for?',
    options: ['Removal of calcium and magnesium hardness', 'Removal of halogen compounds', 'Removal of large organic protein material', 'Remove algae and microorganisms'],
    answer: 1,
  },
  {
    q: '76. Which of the following statements is not correct regarding isomerisation?',
    options: ['Hops can be pre-isomerised using magnesium oxide as part of the isomerisation process', 'Pre-isomerisation can double the hop utilisation of hop pellets', 'Isomerisation requires heat to convert the alpha-acids into iso-alpha-acids', 'Isomerisation always requires a chemical catalyst and so is not seen as `natural`'],
    answer: 3,
  },
  {
    q: '78. Which of the following is not an outcome of the malt kilning process?',
    options: ['Biochemically and microbiologically stable product', 'A final malt moisture of between 3-5%', 'Formation of flavour and colour compounds in the malt', 'High malt enzyme activity'],
    answer: 3,
  },
  {
    q: '79. Which of the following is not correct about temporary hardness?',
    options: ['Temporary hardness can be removed by boiling', 'Temporary hardness can lead to scale developing on brewing heating surfaces', 'Temporary hardness is made up of calcium and magnesium carbonates and bicarbonates', 'Temporary hardness lowers pH'],
    answer: 3,
  },
  {
    q: '80. Which water supply is likely to have the highest microbiological load?',
    options: ['An aquifer', 'A lake', 'A borehole', 'Municipal water'],
    answer: 1,
  },
  {
    q: '81. The bittering and aromatic compounds found in hops are located in which part of the hop cone?',
    options: ['Seeds', 'Lupulin glands', 'Bract', 'Strig'],
    answer: 1,
  },
  {
    q: '82. Which of the following statements describes an advantage of single use dried yeast?',
    options: ['Long shelf life.', 'Wide choice of different brewing strains', 'Dried yeast is resistant to contamination', 'Fermentations using dried yeast convert more sugar into alcohol'],
    answer: 0,
  },
  {
    q: '83. Which of the following hop products should ideally be added at the start of the wort boiling process?',
    options: ['Isomerised kettle extract', 'Reduced hop extract', 'Iso-extract', 'Hop extract'],
    answer: 3,
  },
  {
    q: '84. Hops are primarily used for which of the following reasons?',
    options: ['Microbial agent', 'Bittering and aroma', 'Anti-foam agent', 'Filtration media'],
    answer: 1,
  },
  {
    q: '85. What can be a result of high levels of zinc in water?',
    options: ['Inhibit yeast and give a salt taste', 'Inhibit yeast and affect flavour stability', 'Astringent flavours and it can be toxic to the east', 'A laxative effect'],
    answer: 2,
  },
  {
    q: '86. Adjuncts are used in brewing as',
    options: ['a way of reducing the original gravity of the wort', 'an alternative source of fermentable extract', 'an ingredient for Reinheitsgebot-compliant beers', 'a bittering flavour addition'],
    answer: 1,
  },
  {
    q: '87. Order the key process steps in converting barley to malted barley during the malting process from start to finish:',
    options: ['Steeping, Germination, Kilning', 'Germination, Steeping, Kilning', 'Steeping, Kilning, Germination', 'Kilning, Steeping, Germination'],
    answer: 0,
  },
  {
    q: '88. Which method can remove permanent hardness from water?',
    options: ['Ion exchange', 'Addition of hydrochloric acid', 'Addition of calcium hydroxide', 'Boiling'],
    answer: 0,
  },
  {
    q: '89. Which of the following reasons might limit the number of times lager yeast can be successfully re-used in fermentation?',
    options: ['Yeast crops become more concentrated with each fermentation cycle', 'Yeast crop size increases with repeated cropping and re-pitching', 'Lager yeasts tend to shift to top-cropping with repeated cropping and re-pitching', 'Increased risk mutation and that a non-standard variant will be selected in croping'],
    answer: 3,
  },
  {
    q: '90. Which of the following malt analyses would be typical of an under-modified malt?',
    options: ['Total nitrogen: 2%; Beta glucan: 100 mg/L; Kolbach Index: 45%', 'Total nitrogen: 1.7%; Beta glucan: 200 mg/L; Kolbach Index: 39%', 'Total nitrogen: 1.5%; Beta glucan: 250 mg/L; Kolbach Index: 35%', 'Total nitrogen: 1.5%; Beta glucan: 200 mg/L; Kolbach Index: 45%'],
    answer: 2,
  },
  {
    q: '91. What is the primary role of the barley husk?',
    options: ['To protect the embryo inside from physical damage', 'To prevent carbon dioxide and micro-organisms from entering the grain', 'To regulate water and nutrient uptake during the malting process', 'To form a filter bed during mash separation in the brewhouse'],
    answer: 0,
  },
  {
    q: '92. Unevenly hydrated barley at the end of the steeping process during malting can lead to',
    options: ['poorly modified malt', 'a consistent final barley kernel moisture level of 43 - 46%', 'similar levels of chitting', 'high levels of fermentable sugar'],
    answer: 0,
  },
  {
    q: '93. Why are male plants eradicated from hop farms?',
    options: ['Pollen can cause seed formation in females which is negative for flavour stability in beer', 'Are more susceptible to disease which is negative to hop cone yields', 'Male hop cones lack alpha-acids which is negative for the flavour of beer', 'Female hop cones lack essential oils when pollinated which is negative for the aroma of beer'],
    answer: 0,
  },
  {
    q: '94. A colour specification of 110 EBC and an extract of 68% would be typical for a',
    options: ['Munich malt', 'Chocolate malt', 'Amber malt', 'Brown malt'],
    answer: 3,
  },
  {
    q: '95. The name of the barley structure that the arrow is pointing to is the',
    options: ['endosperm', 'scutellum', 'pericarp and testa', 'aleurone layer'],
    answer: 3,
    img: 'img/aleurone.jpg'
  },
  {
    q: '96. Vienna malt is produced by',
    options: ['kilning a well modified green malt at 60°C and curing at up to 80°C', 'kilning a well modified green malt at 65°C and curing at up to 80°C', 'kilning a well modified green malt at 75°C and curing at up to 90°C', 'kilning a well modified green malt at 95°C and curing at up to 105°C'],
    answer: 2,
  },
  {
    q: '97. Which method of sterilising water has an effective residual sterilising potential and is non-corrosive?',
    options: ['Ozone', 'Sterile filtration', 'Chlorine dioxide', 'Ultra-violet light'],
    answer: 2,
  },
  {
    q: '98. Foam stability of beer can be improved by using',
    options: ['Wheat', 'Maize', 'Sorgum', 'Rice'],
    answer: 0,
  },
  {
    q: '99. This hop product has a consistent and known alpha-acid content, with a very good hop utilisation and results in minimal beer loss. The product has a long shelf life.” Which hop product does this best describe?',
    options: ['Whole hops', 'T90 hop pellets', 'T45 hop pellets', 'Hop extract'],
    answer: 3,
  },
  {
    q: '100. Which of the following is not a characteristic of T90 hop pellets?',
    options: ['They can come in non-isomerised and pre-isomerised form', 'They have 90% of the original hop material in the pellet', 'hey can be used in the wort kettle and as a dry hop', 'They can be used as a filter media in a hop back'],
    answer: 3,
  },
  {
    q: '101. Which is the largest pore size filtration method you would you use to remove yeast and bacterial cells from water?',
    options: ['Reverse osmosis', 'Microfiltration', 'Microfiltration', 'Ultrafiltration'],
    answer: 1,
  },
  {
    q: '102. What is the scientific name for the yeast that is used to make ales?',
    options: ['Saccharomyces diastaticus', 'Saccharomyces eubayanus', 'Saccharomyces uvarum.', 'Saccharomyces cerevisiae'],
    answer:3,
  },
  {
    q: '103. Gluten-free beers, without any enzyme addition, can be made using',
    options: ['malted rye', 'malted barley', 'malted wheat', 'malted buckwheat'],
    answer:3,
  },
  {
    q: '104. Dilution water used in high gravity brewing should',
    options: ['have a low dissolved oxygen', 'have a higher pH than the high gravity beer', 'have high alkalinity', 'be at ambient temperature'],
    answer:0,
  },
  {
    q: '105. If you are brewing a hoppy IPA, which of the following minerals will enhance the hop character and dryness in the beer?',
    options: ['Chloride', 'Calcium', 'Sulphate', 'Magnesium'],
    answer:2,
  },
  {
    q: '106. How many chromosomes does a brewing yeast cell possess?',
    options: ['23', '16', '46', '8'],
    answer:1,
  },
  {
    q: '107. What percentage of the hop cone is made up of the alpha-acids?',
    options: ['Less than 20%', 'Between 30 and 40%', 'Between 20 and 30%', 'Over 40%'],
    answer:0,
  },
  {
    q: '108. Which of the following combinations describes the ideal conditions for storing pitching yeast?',
    options: ['3 days or less, maximum of 7 days; less than 0 C; atmosphere of CO or nitrogen', '3 days or less, maximum of 7 days; 2-4C; atmosphere of CO2 or nitrogen', '7-14 days, 2-4 C; aerated', '3 days or less, maximum of 7 days; room temperature; atmosphere of CO or nitrogen'],
    answer:1,
  },
  {
    q: '109. What are the main constituents of hard water?',
    options: ['Calcium and magnesium', 'Sodium and magnesium', 'Calcium and chlorine', 'Sodium and calcium'],
    answer:0,
  },
  {
    q: '110. Which of the following statements describes an advantage of single use dried yeast?',
    options: ['Dried yeast is resistant to contamination', 'Long shelf life', 'Wide choice of different brewing strains', 'Fermentations using dried yeast convert more sugar into alcohol'],
    answer:1,
  },
  {
    q: '111. Which of the sentences below correctly applies to alpha-amylase?',
    options: ['alpha-amylase attacks starch molecules at random and works best at 63°C', 'alpha-amylase attacks starch molecules only at the end of the molecule and works best at 67°C', 'alpha-amylase attacks starch molecules only at the end of the molecule and works best at 67°C', 'alpha-amylase attacks starch molecules at random and works best at 72°C'],
    answer:3,
  },
  {
    q: '112. Why do we oxygenate wort?',
    options: ['To supply yeast with oxygen required to make sterols and fatty acids hence allow growth', 'To activate dried yeasត', 'To help form cold break', 'To increase the amount of nutrients in the wort'],
    answer:0,
  },
  {
    q: '113. We use 40 kg of hops with 5.2% alpha-acid to brew 250 hL of beer. The beer is 18 IBU. What is the hop utilisation?',
    options: ['21,63%', '28,21%', '22,54%', '33,01%'],
    answer:0,
  },
  {
    q: '114. Which of these are the points at which we end wort collection from a lauter tun?',
    options: ['When the target sparge volume has been delivered and the spent grains removal system is ready', 'When the target wort volume has been collected and the last wort runnings gravity has reached the target value', 'When the differential pressure (DP) across the filter bed has reached a minimum and the kettle is full', 'When the rakes are at the lowest point and flow rate has dropped'],
    answer:1,
  },
  {
    q: '115. What property of malt husk makes it a good filter bed?',
    options: ['It contains polyphenols', 'It is insoluble in water', 'It is brittle unless wetted', 'It can be milled to produce fine particles'],
    answer:1,
  },
  {
    q: '116. What is the maximum concentration of dissolved oxygen which can be achieved by oxygenating wort with air?',
    options: ['12 mg/L', '12 mg/L', '5 mg/L', '30 mg/L'],
    answer:1,
  },
  {
    q: '117. How does boiling stabilise wort?',
    options: ['By stopping enzymes continuing with conversion by denaturing them', 'By boiling at a higher pressure', 'By removing haze forming proteins', 'By evaporating the wort until the target specific gravity is reached'],
    answer:0,
  },
  {
    q: '118. Which of the following is the typical grist for a mash filter?',
    options: ['A', 'B', 'C', 'D'],
    answer:3,
    img:'img/d.jpg'
  },
  {
    q: '119. Which sentence describes the flow of wort and water through a plate heat exchanger?',
    options: ['Cold water and hot wort are fed into the heat exchanger so the hottest wort meets the coldest water. Because the temperature difference is so great the exchange of heat is more effective', 'Hot wort flows down one side of each plate being cooled as it goes. Cold water flows down the opposite side being heated as it flows. The flows are parallel and turbulent', 'Hot wort flows down one side of each plate being cooled as it goes. Cold water flows up the opposite side being heated as it flows. The flows are counter current and turbulent. Parallel flows would just lead to warm wort and warm water as the temperatures equalise', 'The flow of cold water comes from one end of the heat exchanger and the flow of wort comes from the other. The water gets progressively hotter and the wort progressively colder as they pass along the length of the heat exchanger. The flows are turbulent.'],
    answer:2,    
  },
  {
    q: '120. Which of the following wort boiling systems has the most turbulent flow over the heating surfaces?',
    options: ['Direct fired kettle', 'External calandria', 'Vertical steam heating tubes with wort spreader', 'Internal calandria'],
    answer:1,
  },
  {
    q: '121. How is trub removed in a hop back?',
    options: ['It is filtered out as the wort passes through a bed of hops', 'It is left in solution and drops out as cold break when the wort is cooled', 'it is removed by a centrifugal separator after the vessel', 'It gets thrown out of solution as the vessel spins and is removed at the side'],
    answer:0,
  },
  {
    q: '122. Which of the following statements about wort boiling is true?',
    options: ['Wort boiling is the last of the brewhouse processes before fermentation', 'Wort boiling takes the longest of all brewhouse processes', 'Wort boiling uses the most energy of all the processes in the brewhouse', 'Wort boiling is the final part of wort separation'],
    answer:2,
  },
  {
    q: '123. Which of the following sentences apply to the function of a protease enzyme?',
    options: ['It breaks starch down producing mostly maltose working best at 63°C', ' It breaks down proteins and beta-glucans and works best at 50-54°C', 'It is denatured above 50°C', 'A protease enzyme breaks down proteins into amino acids, working best at 50-54°C'],
    answer:3,
  },
  {
    q: '124. Which of the following are all uses for spent grains?',
    options: ['Animal feed, burning to make steam, paper manufacture, composting', 'Animal feed, biodiesel, burning to make steam, composting', 'Animal feed, composting, bioethanol, burning to make steam', 'Animal feed, insulation for homes, composting, burning to make steam'],
    answer:2,
  },
  {
    q: '125. What is an International Bitterness unit IBU?',
    options: ['1 mg of alpha-acids in 1 litre of beer or wort', 'IBUs tell you how hoppy your beer will be. To be really hoppy, any beer must be over 50 IBU', 'The percentage of alpha-acids in hops or hop products', '1 milligram of iso-alpha-acids in 1 litre of beer or wort'],
    answer:3,
  },
  {
    q: '126. On what basis do destoners remove foreign bodies from grain?',
    options: ['Size', 'Mass or weight', 'Hardness', 'Magnetism'],
    answer:1,
  },
  {
    q: '127. What is the Maillard reaction?',
    options: ['The isomerisation of alpha-acids into iso-alpha-acids', 'The reactions between amino acids and lipids to produce sweet/bready aromas and brown colours', 'The reaction of proteins and polyphenols to form haze', 'The reactions between amino acids and sugars to produce sweet/bready aromas and brown colours'],
    answer:3,
  },
  {
    q: '128. What is the purpose of milling grain?',
    options: ['To reduce dust levels in the grain handling system and protect the husk from damage', 'To reduce the amount of water required to produce wort and enable grist to be moved more easily', 'To expose the part of the grain containing the extract and produce the correct particle size distibution for the wort separation system', 'To activate the enzymes in the grain and provide a good filter bed for wort separation'],
    answer:2,
  },
  {
    q: '129. Which of the following can over oxygenation lead to?',
    options: ['Higher than desirable levels of dimethyl sulphide', 'Inadequate yeast concentration in fermentation', 'Higher than desirable levels of esters and higher alcohols', 'Slow fermentations'],
    answer:2,
  },
  {
    q: '130. Which of the following are correct with regard to kettle finings?',
    options: ['Kettle finings have a positive charge and remove the positively charged break proteins', 'Kettle finings are added to the whirlpool to remove hop material', 'Kettle finings have a negative charge and react with break proteins to form flocs', 'Kettle finings have a positive charge and remove negatively charged lipids to form cold break'],
    answer:2,
  },
  {
    q: '131. What is the main reason for heating maize and rice separately before adding them to the mash?',
    options: ['They are too hard to mill so we cook them to break down their husks', 'To raise the temperature in the MCV to the temperature of saccharification', 'To gelatinise their starch', 'Because they don`t have enzymes they can be heated to a higher temperature'],
    answer:2,
  },
  {
    q: '132. Why is it important to avoid collecting hazy worts during wort separation?',
    options: ['They cause an increase in DP which slows the run off rate', 'They raise wort pH at the end of the run off which is bad for wort quality', 'They mean we need to clean the brewhouse vessels more frequently which affects the number of brews we can do per day', 'Hazes in wort can lead to problems later in the brewing process like large amounts of trub, difficulty when filtering beer and unpleasant beer flavour'],
    answer:3,
  },
  {
    q: '133. Which of the following is a means to prevent an explosion?',
    options: ['Analysing a sample of grain before unloading a truck', 'Fitting an explosion vent to a conveyor', 'Using a dresser to remove wood and straw', 'Extracting dust from a grain handling system'],
    answer:3,
  },
  {
    q: '134. Which of the following are all objectives of wort cooling?',
    options: ['To chill the wort to the lowest point possible, to precipitate cold break and prevent contamination', 'Cool slowly to allow hot break to be removed and prevent contamination with microbes', 'Precipitate cold break, prevent contamination with microbes and cool wort in the required timeframe', 'Recover heat from the boil, expose the wort to the open air as it cools, leave the hops to steep in the wort for as long as possible'],
    answer:2,
  },
  {
    q: '135. Which of the following slows heat transfer into the wort through the surface of the heater?',
    options: ['Fouling on the heating surface', 'Turbulent flow across the heating surface', 'Circulation currents in the kettle', 'Rapid flow of wort across heating surface'],
    answer:0,
  },
  {
    q: '136. What must we do when hydrating a grist for a mash tun?',
    options: ['Add the mash close to the false floor side of the vessel to prevent oxygen pick up', 'Add calcium salts to reduce pH', 'Only partially hydrate the grist so the mash bed can stay suspended above the false floor', 'Use a water temperature of 85°C because the mash tun can`t be heated'],
    answer:2,
  },
  {
    q: '137. Which of the following has a positive effect on hop utilisation?',
    options: ['High gravity wort', 'Higher temperature', 'Higher trub formation','Use of large amounts of hops with low percentage alpha-acid'],
    answer:1,
  },
  {
    q: '138. What is the best pH range should you aim for in mashing?',
    options: ['5.2-5.4', '5.2-5.8', '5.4-6.4','4.5-5.0'],
    answer:0,
  },
  {
    q: '139. Why do we raise the temperature of the mash before transferring it to the lauter tun or mash filter?',
    options: ['To make it easier to pump', ' To reduce viscosity and enable alpha-amylase to work', 'To increase viscosity and start to denature enzymes.','To reduce viscosity and start to denature enzymes'],
    answer:3,
  },
  {
    q: '140. Which of the following accurately describe what happens during lautering ?',
    options: ['Wort gravity falls, flow rate stays the same and pH rises', 'Wort gravity stays the same, flow rate falls and pH rises.', 'Wort gravity increases, pH falls and flow rate increases','Wort gravity falls, flow rate increases and pH rises'],
    answer:3,
  },
  {
    q: '141. We have just finished a boil and the gravity has gone up from 11.4°P at the start of the boil to 12.2°P at the end of the boil. What`s our percentage evaporation?',
    options: ['8%', '7.02%', '6.6%','6.56%'],
    answer:3,
  },
  {
    q: '142. Which of these is an essential requirement of all malt storage facilities? ',
    options: ['They are close to the lab so easy to sample', 'They are sited indoors', 'They are dry and free of pests','They are protected from frost and low temperatures'],
    answer:2,
  },
  {
    q: '143. Which of the following conditions favour a higher uptake of oxygen in an oxygenation system?',
    options: ['Smooth flow of wort', 'High pressure', 'High temperature','Low bubble surface area'],
    answer:1,
  },
  {
    q: '144. Which of the answers below shows the three primary process considerations when selecting a wort separation system?',
    options: ['Bed loading, cycle time, extract efficiency', 'Extract efficiency, cycle time and wort quality', 'Cycle time, ease of cleaning, visual appearance','Run off rate, extract efficiency, wort pH'],
    answer:1,
  },
  {
    q: '145. What is contained in the trub cone of a whirlpool?',
    options: ['Hot break and spent grains', 'Cold break and hop material', 'Spent grains and hop material','The hot break and the hop material'],
    answer:3,
  },
  {
    q: '146. Which of the following compounds are found in spent grains and lead to reduced beer head stability and stale flavours?',
    options: ['Lipds', 'Poluphenols', 'Tannins','Silica'],
    answer:0,
  },
  {
    q: '147. How much lager malt with an extract of 83% do you need to make a 150 hL wort of 12°P and a density of 1.048 kg/L using a mash filter giving us 101% extract efficiency',
    options: ['2245 kg', '2435 kg', '2250 kg','2272 kg'],
    answer:2,
  },
  {
    q: '148. Why do mash conversion vessels have agitators?',
    options: ['To save installing a pre masher', 'To mix the mash well enough to allow the heat from the heating elements to be distributed evenly', 'To reduce the particle size of the grist to improve extract','To release enzymes from the grist'],
    answer:1,
  },
  {
    q: '149. What is the main reason for conditioning malt?',
    options: ['To reduce dust when milling', 'To make it easier to crush', 'To protect the husk from damage during milling','To convert under modified malt'],
    answer:2,
  },
  {
    q: '150. You have used 2,000 kg of malt with a lab extract of 83% extract to make 110 hL of wort at 13°P which has a density of 1.052 kg/Litre. What is the extract efficiency?',
    options: ['90.62%', '86.14%', '96.22%','110.34%'],
    answer:0,
  },
  {
    q: '151. Why is it important to avoid collecting hazy worts during wort separation?',
    options: ['They cause an increase in DP which slows the run off rate', 'Hazes in wort can lead to problems later in the brewing process like large amounts of trub, difficulty when filtering beer and unpleasant beer flavour', 'They raise wort pH at the end of the run off which is bad for wort quality','They mean we need to clean the brewhouse vessels more frequently which affects the number of brews we can do per day'],
    answer:1,
  },
  {
    q: '152. Which of the following can over oxygenation lead to?',
    options: ['Higher than desirable levels of dimethyl sulphide', 'Inadequate yeast concentration in fermentation', 'Slow fermentations','Higher than desirable levels of esters and higher alcohols'],
    answer:3,
  },
  {
    q: '153. Why do we add calcium salts and sour wort to mashes?',
    options: ['To breakdown proteins', 'To increase mash alkalinity.', 'To control pH','To prevent enzymes from being denatured'],
    answer:2,
  },
  {
    q: '154. Why do mash conversion vessels have agitators?',
    options: ['To mix the mash well enough to allow the heat from the heating elements to be distributed evenly', 'To save installing a pre masher', 'To release enzymes from the grist','To reduce the particle size of the grist to improve extract'],
    answer:0,
  },
  {
    q: '155. What is an International Bitterness unit IBU?',
    options: ['IBUs tell you how hoppy your beer will be. To be really hoppy, any beer must be over 50 IBU', '1 mg of alpha-acids in 1 litre of beer or wort', 'The percentage of alpha-acids in hops or hop products','1 milligram of iso-alpha-acids in 1 litre of beer or wort'],
    answer:3,
  },
  {
    q: '156. Which of the following sentences apply to the function of a protease enzyme?',
    options: ['It breaks down proteins and beta-glucans and works best at 50-54°C', 'It breaks starch down producing mostly maltose working best at 63°C', 'A protease enzyme breaks down proteins into amino acids, working best at 50-54°C','It is denatured above 50°C'],
    answer:2,
  },
  {
    q: '157. On what basis do destoners remove foreign bodies from grain?',
    options: ['Size', 'Hardness', 'Magnetism','Mass or weight'],
    answer:3,
  },
  {
    q: '158. Which of the following is a means to prevent an explosion?',
    options: ['Analysing a sample of grain before unloading a truck', 'Using a dresser to remove wood and straw', 'Fitting an explosion vent to a conveyor','Extracting dust from a grain handling system'],
    answer:3,
  },
  {
    q: '159. What is yeast supply?',
    options: ['System for ensuring the brewery has the correct yeast strain in the right quantity and state at the time needed for brewing', 'Transporting yeast from one brewery to another', 'Recovering excess yeast from fermentation and storing it for re-pitching','Making sure the brewery has enough yeast to make beer with'],
    answer:0,
  },
  {
    q: '160. What does it mean if a fermentation is fully attenuated?',
    options: ['Gravity has dropped to a lower value than would be expected', 'Wort gravity has dropped to zero', 'Fermentation has stopped before all the fermentable sugar has been used','All the fermentable sugars have been used'],
    answer:3,
  },
  {
    q: '161. How many molecules of alcohol does yeast produce in fermentation for every molecule of maltose it ferments?',
    options: ['Two', 'Eight', 'Four','One'],
    answer:2,
  },
  {
    q: '162. What term is used to describe the nitrogen-containing components of wort that are most easily used by yeast during fermentation?',
    options: ['Total soluble nitrogen (TSN)', 'Free amino nitrogen (FAN)', 'Total nitrogen bases (TNB)','Total protein (TP)'],
    answer:1,
  },
  {
    q: '163. What is the name of a microbiological medium that allows the growth of some organisms but not others?',
    options: ['Minimal medium', 'Liquid nutrient medium.', 'Differential medium','Selective medium'],
    answer:3,
  },
  {
    q: '164. What is the name of the ability of some yeasts strains to stick together in the later stages of fermentation and form large clumps of cells?',
    options: ['Autolysis', 'Budding', 'Flocculation','Sporulation'],
    answer:2,
  },
  {
    q: '165. Which of the following is an advantage of using open fermenters and top-cropping yeast?',
    options: ['Easier temperature control because vessels are not closed', 'Open vessels ensure yeast gets good supply of oxygen from the air', 'Easy access to vessels for cleaning','Produces very clean yeast crops'],
    answer:3,
  },
  {
    q: '166. Which of the following statements describes a yeast master culture?',
    options: ['The main strain in a mixture of yeasts', 'Yeast used by a brewery to produce beer', 'Yeast culture from which all yeast used in brewery is derived','A pure strain of yeast'],
    answer:3,
  },
  {
    q: '167. Which of the following is used to calculate wort fermentability?',
    options: ['A', 'B', 'C','D'],
    answer:3,
    img:'img/a.jpg'
  },
  {
    q: '168. How do you convert wort present gravity (PG), into degrees Plato?',
    options: ['Divide by two', 'Multiply by four', 'Multiply by 100','Divide by four'],
    answer:3,
  },
  {
    q: '169. Which of the following statements best describes what is happening in the stationary phase of fermentation?',
    options: ['Phase in which yeast is taking up oxygen before growth commences', 'Period of adaption after pitching in which yeast adapts to new conditions', 'Yeast growth has stopped because an essential nutrient has been used up','Period of cellular re-arrangement before yeast starts to grow'],
    answer:2,
  },
  {
    q: '170. What is a skimming board used for?',
    options: ['Removing the crop of yeast that forms on the surface of fermenting wort', 'Removing foam from the surface of fermenting worts', 'Separating yeast bottom crops from the fractions heavily contaminated with trub','Removing the trub layer from fermenting wort'],
    answer:0,
  },
  {
    q: '171. Which method is most often used to assess the health of pitching yeast?',
    options: ['Viability determination', 'Confirmation of yeast purity', 'Determination of yeast concentration','Confirmation of strain identity'],
    answer:0,
  },
  {
    q: '172. Which of the following is considered the best method for the long-term storage of yeast cultures?',
    options: ['Freeze drying', ' In a conventional refrigerator at 2 - 4°C', 'In liquid nitrogen','In a -80°C refrigerator'],
    answer:2,
  },
  {
    q: '173. Which of the following statements describes the glycolytic pathway?',
    options: ['Pathway that converts simple sugars into alcohol and CO2', 'Pathway which breaks down sugars providing oxygen is present', 'Pathway used by yeast cells produce ATP from the breakdown of simple sugars','Pathway used by yeast to breakdown starch'],
    answer:2,
  },
  {
    q: '174. Which of the following parameters does not have any effect on how much yeast grows in fermentation?',
    options: ['Yeast pitching rate', 'Wort oxygenation', 'Temperature','Wort FAN'],
    answer:2,
  },
  {
    q: '175. Which of the following statements describes the process in which a new yeast culture is grown, using a laboratory stock culture, until there is enough to pitch a production-scale fermentation?',
    options: ['Yeast grown in fermentation', 'Yeast propagation', 'Yeast pitching',' Yeast cropping'],
    answer:1,
  },
  {
    q: '176. Which of the following statements correctly describes viability?',
    options: ['The proportion of live cells in the population', 'Number of live cells in the population', 'Number of dead cells in the population','Total number of cells in the population'],
    answer:0,
  },
  {
    q: '177. Which of the following statements describes why high gravity brewing is typically used?',
    options: ['Using very concentrated worts to reduce the risk of microbial spoilage', 'Increasing fermentation productivity with no need for additional fermentation vessels', 'Method for producing very strong beers','Producing beers with a low freezing point to allow rapid conditioning'],
    answer:1,
  },
  {
    q: '178. Why does recycled yeast require oxygen when it is re-pitched?',
    options: ['To encourage the formation of glycogen', 'To allow respiration to occur to encourage yeast growth', 'To promote the onset of budding','For the synthesis of essential membrane lipids'],
    answer:3,
  },
  {
    q: '179. During fermentation the pH falls. What are the typical start and end values?',
    options: ['Start pH 5.4-5.6; end pH 5.2-5.4', 'Start pH 5.0-5.2; end pH 3.8-4.4', 'Start pH 3.0-3.2; end pH 2.2-2.4','Start pH 6.0-6.2; end pH 5.0-5.2'],
    answer:1,
  },
  {
    q: '180. What is the general name for the methods used to identify yeast strains by analysing their DNA?',
    options: ['Genetic fingerprinting', 'Viability testing', 'Genetic engineering.','Vitality testing'],
    answer:0,
  },
  {
    q: '181. What is a haemocytometerused for in brewing?',
    options: ['Counting yeast cells and determining viability', 'Checking that the correct yeast strain is being used', 'Assessing how much trub/cold break is present in pitching yeast','Detecting bacterial spoilage organisms in yeast samples'],
    answer:0,
  },
  {
    q: '182. Which of the following is a recommended pitching rate for a 15 P wort?',
    options: ['15 million cells per mL', '50 million cells per mL', '25 million cells per mL','5 million cells per mL'],
    answer:0,
  },
  {
    q: '183. What is the name of the type of culture that is most often used for routinely handling yeast in the laboratory?',
    options: ['Petri dish culture', 'Liquid culture', 'Freeze-dried yeast culture','Yeast slope or slant'],
    answer:3,
  },
  // {
  //   q: '171. How many molecules of alcohol does yeast produce in fermentation for every molecule of maltose it ferments?',
  //   options: ['Eight', 'One', 'Two','Four'],
  //   answer:,
  // },
  {
    q: '184. Why is a strong pump required to push beer through a filtration unit?',
    options: ['As the beer is filtered, a beer cooling system reduces the temperature and increases the viscosity of beer', 'As the beer is filtered, the pressure increases because solids block the flow through the filter', 'As the beer is filtered, it should maintain a turbulent flow through the filter system','As the beer is filtered, the temperature of the beer increases, requiring more force to move the beer through the filter'],
    answer:1,
  },
  {
    q: '185. Which of the following governs the amount of carbonation in a particular beer brand?',
    options: ['Consumer expectations and brand specifications', 'Location in production where force carbonation occurs', 'Beer temperature and carbon dioxide pressure','Purity and source of the carbon dioxide'],
    answer:0,
  },
  {
    q: '186. Which of the following methods for the preparation of deaerated water can also result in sterile water?',
    options: ['Gas stripping', 'Packed-bed gas stripping', 'Vacuum stripping','Membrane gaseous exchange'],
    answer:2,
  },
  {
    q: '187. Which statement below is true concerning haze?',
    options: ['Beer with chill haze is cloudy at warm and cold temperatures', 'Permanent haze can become chill haze when the beer is warmed', 'Permanent haze cannot be removed or reduced once it is formed','Beer with chill haze is bright (clear) when warmed'],
    answer:3,
  },
  {
    q: '188. Which of the following is a reason why beer is filtered?',
    options: ['Increase the shelf-life compared to unfiltered beer', 'Degas the beer prior to bottle conditioning', 'Improve sedimentation rates during conditioning','Increase ability of the beer to be cooled'],
    answer:0,
  },
  {
    q: '189. Which one of the follow is not a disadvantage to filtering beer?',
    options: ['Increase in hazards', 'Increase in shelf-life', 'Increase in process time','Increase in cost to produce'],
    answer:1,
  },
  {
    q: '190. Which of the following is not a way to extend the filtration run length?',
    options: ['Centrifuge the beer to remove some solids before the beer is filtered', 'Increase the temperature of the beer to decrease its viscosity', 'Add sedimentation aids to increase the size of particles in the beer','Allow time for sedimentation to take place during cold conditioning'],
    answer:1,
  },
  {
    q: '191. Which factor below increases the ability to dissolve carbon dioxide in beer?',
    options: [' Increase in CO pressure', 'Decrease in pH', 'Decrease in CO pressure','Increase in temperature'],
    answer:0,
  },
  {
    q: '192. Which of the following is not a risk that must be considered when cooling beer prior to cold maturation?',
    options: ['Decarbonation of the beer', 'Freezing of the beer', 'Coolant contamination of the beer','Contamination by microbes'],
    answer:0,
  },
  {
    q: '193. Which of the following results in faster sedimentation of a particle in beer?',
    options: ['Adding fresh yeast to the beer', 'Warming the beer', 'Adding a fining agent','Stirring the beer'],
    answer:2,
  },
  {
    q: '194. Which of the following is a way to extend the filtration run length?',
    options: ['Increase the carbonation level in the beer prior to filtration', 'Centrifuge the beer to remove some solids before the beer is filtered', 'Decrease the flow rate through the filter to allow sediment to form','Allow the beer to warm slightly to decrease its viscosity'],
    answer:1,
  },
  {
    q: '195. Which of the following outlines the correct order for the operational steps in preparing a powder filter?',
    options: ['Assemble filter-Recycle water-Mix powder with sterile water-Recycle water', 'Mix powder with sterile water-Recycle water-Assemble filter-Recycle water', 'Recycle water-Assemble filter-Mix powder with sterile water-Recycle water','Recycle water-Assemble filter-Recycle water-Mix powder with sterile water'],
    answer:0,
  },
  {
    q: '196. Why does bottle conditioned beer have sediment at the bottom?',
    options: ['Beer from cold maturation is stirred vigorously before it is packaged for bottle conditioning', 'Beer destined for bottle conditioning often has a much higher polyphenol and protein content that results in sediment once the beer is bottled', 'Lower carbonation levels in bottle conditioned beer result in greater amounts of sedimentation','Stabilisation and sedimentation occur in the bottle rather than in a cold maturation vessel'],
    answer:3,
  },
  {
    q: '197. What is a significant advantage to performing a polishing filtration on a beer?',
    options: ['Increase in shelf life', 'Improvement in flavour', 'Removal of sediment','Reduction in process time'],
    answer:0,
  },
  {
    q: '198. Crossflow filters offer many advantages but also has some disadvantages when compared with other filtration systems. Which of the following is not one of those advantages?',
    options: ['Lack of powders', 'Use of detergents', 'Effluent waste','Filtration run length'],
    answer:1,
  },
  {
    q: '199. Why is it very unlikely to use silica as a pre-coat in a powder filter?',
    options: ['The hazards associated with the use of silica are too great to consider its use as a pre-coat', 'Silica, such as hydrogel, tends to only be used as a sedimentation aid and not a filter aid', 'The particles are too small to be held back by the filter screen, so a pre-coat bed never forms','The particles are too large to form a bed that can trap the insoluble materials'],
    answer:2,
  },
  {
    q: '200. Which of the following is a major reason for performing warm maturation on green beer?',
    options: ['To remove bacteria', 'To adjust the colour', 'To remove chill haze','To modify the flavour'],
    answer:3,
  },
  {
    q: '201. Which of the following correctly outlines the flow of beer through a filter system?',
    options: ['Rough Beer tank-Filter system-Buffer tank-Bright beer tank', 'Rough beer tank-Buffer tank-Filter system-Buffer tank-Bright beer tank', 'Bright beer tank-Buffer tank-Rough beer tank-Filter system','Buffer tank-Rough beer tank-Filter system-Buffer tank-Bright beer tank'],
    answer:1,
  },
  {
    q: '202. What aspect of warm maturation is the reason for the removal of diacetyl in green beer?',
    options: ['Proteins in green beer are activated during warm maturation and their reaction with diacetyl is enhanced', 'During warm maturation, yeast can produce ethanol that reacts with diacetyl and removes it from the green beer', 'Diacetyl can form haze with polyphenols during warm maturation and sediment faster','Yeast have the opportunity to consume diacetyl and convert it into compounds with a high flavour threshold'],
    answer:3,
  },
  {
    q: '203. Which of the following can only',
    options: ['Static head', 'Venturi tube', 'Carbonation nozzle','Diffuser stone'],
    answer:1,
  },
  {
    q: '204. Which of the following is a haze precursor found in beer?',
    options: ['Protein', 'NAD+', 'Carrageenan','Acetaldehyde.'],
    answer:0,
  },
  {
    q: '205. Which filtration method removes haze precursors?',
    options: ['Rough filtration', 'Polishing filtration', 'Sterile filtration','Stabilising filtration'],
    answer:3,
  },
  {
    q: '206. Why is deaerated water at >85°C typically used to prepare a sheet filter?',
    options: ['The high temperature sterilises the filter sheets and the deaerated water helps remove oxygen', 'The high temperature is needed to maintain the oxygen level in the system', 'The high temperature decreases the viscosity of the beer and helps it move through the filter easier','The high temperature helps to solubilise the filter sheet material and form a more compact filter bed'],
    answer:0,
  },
  {
    q: '207. Deaerated water is used in multiple locations throughout the brewery. Which of the following is not a requirement for that water?',
    options: ['Free of sediment', 'Free of all minerals', 'Free of bacterial growth','Free of oxygen'],
    answer:1,
  },
  {
    q: '208. The key principles to maintaining carbonation after carbon dioxide has been added to the beer include',
    options: ['slowly reducing the pressure before it is packaged', 'avoiding turbulent flow', 'holding the beer at room temperature','freezing the beer'],
    answer:1,
  },
  {
    q: '209. Which law governs sedimentation?',
    options: ['Darcy`s Law', 'Stokes` Law', 'Beer`s Law','Henry`s Law'],
    answer:1,
  },
  {
    q: '210. Which of the following is not a process system used to cool beer?',
    options: ['Plate heat exchanger', 'Membrane gaseous exchanger', 'Shell and tube heat exchanger','Unitank'],
    answer:1,
  },
  {
    q: '211. The level of turbidity or haze in a beer can be measured using EBC or ASBC methods. How are the tests performed to obtain the measurement?',
    options: ['The quantity of light that is scattered by the particles suspended in the beer provides the measurement ofturbidity', 'The viscosity of the sample is compared to the viscosity of water to measure the turbidity of the beer', 'The freezing point of the beer increases as more particles are suspended in the beer','The density of the sample is compared to the density without the particles in suspension to provide the measurement'],
    answer:0,
  },
  {
    q: '212. Which of the following statements about cask conditioning is not correct?',
    options: ['Storage of the beer during cask conditioning mimics the conditions for cold conditioning', 'Sedimentation continues to occur during cask conditioning.', 'Beer that is to be cask conditioned is typically packaged in the casks directly after fermentation.','The correct dosing of additives to the cask is determined by experimenting with each brand of beer'],
    answer:0,
  },
  {
    q: '213. How many hL of deaerated water must be added to 100 hL of a 6 % abv beer to achieve package specifications of 4% abv?',
    options: ['25 hL', '150 hL', '100 hL','50 hL'],
    answer:3,
  },
  {
    q: '214. Which of the following is the least common source of carbon dioxide used in brewing operations?',
    options: ['The exhaust gases from the fermenter', 'The exhaust gases from the maturation tank', 'The local industrial supply company','The natural process of fermentation'],
    answer:1,
  },
  {
    q: '215. What type of flow ensures excellent heat transfer in a plate heat exchanger?',
    options: ['Crossflow', 'Turbulent', 'Tangential','Laminar'],
    answer:1,
  },
  {
    q: '216. Why are horizontal tanks sometimes used in cold conditioning?',
    options: ['Horizontal tanks are easier to clean than vertical tanks', 'Cooling jackets on horizontal tanks can cool the beer faster', 'Horizontal tanks are less expensive than vertical tanks','Sedimentation is faster in shallower tanks'],
    answer:3,
  },
  {
    q: '217. Which of the following stabilising agents would be the best choice for removing polyphenols from beer?',
    options: ['Tannic acid', 'Silica gel', 'PVPP','Papain'],
    answer:2,
  },
  {
    q: '218. Which of the following is a safety hazard to a powder filter operator?',
    options: ['Oxygen', 'Waste', 'Dust','Iron'],
    answer:2,
  },
  {
    q: '219. Which of the following filtration systems operates under the principles of sieve filtration?',
    options: ['Candle filter', 'Leaf filter', 'Plate and frame filter','Crossflow filter'],
    answer:3,
  },
  {
    q: '220. Which of the following does not enhance haze formation?',
    options: ['Ployphenols', 'Proteins', 'Oxygen','Carbon dioxide'],
    answer:3,
  },
  {
    q: '221. Beer can undergo fermentation, warm maturation and cold maturation in a vessel known as',
    options: ['a cask', 'a unitank', 'a horizontal tank','a dual-tank system'],
    answer:1,
  },
  {
    q: '222. Which of the following filter aids is usually mixed with other filter aids in order to be used effectively?',
    options: ['Cellulose', 'Silica', 'Diatomaceous earth','Perlite'],
    answer:0,
  },
  {
    q: '223. Which principle of filtration works when solids adhere to the surfaces during filtration?',
    options: ['Depth', 'Adsorption', 'Membrane','Sieving'],
    answer:1,
  },
  {
    q: '224. Which of the following is the greatest benefit to the use of a double-stage versus single-stage heat exchanger for chilling beer prior to cold maturation?',
    options: ['Improved control of the chilling process', 'Decreased risk of coolant contamination of the beer', 'Increased sedimentation rates during cold conditioning','Reduced chance of turbulent flow'],
    answer:0,
  },
  {
    q: '225. Which filtration method removes haze precursors?',
    options: ['Sterile filtration', 'Rough filtration', 'Stabilising filtration','Polishing filtration'],
    answer:2,
  },
  {
    q: '226. Which of the following filter aids is usually mixed with other filter aids in order to be used effectively?',
    options: ['Perlite', 'Diatomaceous earth', 'Cellulose','Silica'],
    answer:2,
  },
  {
    q: '227. Why is traceability important?',
    options: ['It prevents a product being made according to the wrong recipe', 'It enables you to trace a problem to a specific batch so you can withdraw it from sale if necessary', 'It prevents going out of stock of specific items or finished goods','It helps improve the quality of the finished goods which are sent to the customers'],
    answer:1,
  },
  {
    q: '228. A simple definition of a Quality Management System (QMS) is',
    options: ['a set of manuals everyone has to follow', 'say what you do, then do what you say', 'write everything you do down','an auditing tool to check on training'],
    answer:1,
  },
  {
    q: '229. The sigma value is a measure of',
    options: ['statistical outliers', 'statistical mean', 'standard deviation','statistical median'],
    answer:2,
  },
  {
    q: '230. What should be in place when setting a specification?',
    options: ['Target only', 'Target and lower specification limit', 'Target and upper specification limit','Target and range'],
    answer:3,
  },
  {
    q: '231. What is quality control?',
    options: ['A system of documents to set out correct production procedure', 'A system of testing and measurement of products to confirm they meet quality requirements', 'An auditing process to review production processes','A system of measurement of production processes to confirm products meet quality requirements'],
    answer:1,
  },
  {
    q: '232. Which type of sensory test would you select if you want to carry out quick, regular checks after packaging to ensure that there has been no cross-contamination between brands?',
    options: ['Flavour profiling', 'Descriptive test', 'Difference test','Screening test'],
    answer:3,
  },
  {
    q: '233. How can inline instruments control a process?',
    options: ['Measure then adjust a parameter in a control loop', 'Signalling an alarm when a parameter is out of specification', 'Logging data continuous on a process parameter for instant control charts','By providing more accurate results than off line instruments'],
    answer:0,
  },
  {
    q: '234. Who does Total Quality Management (TQM) say is responsible for quality',
    options: ['Management', 'The quality department', 'All employees','Production staff'],
    answer:2,
  },
  {
    q: '235. What is Good Manufacturing Practice (GMP)',
    options: ['An alternative food safety system to HACCP', 'A standard set by retailers food that manufacturers need to comply with', 'A set of legal requirements for food manufacturing','A set of practices and standards for manufacturing food'],
    answer:3,
  },
  {
    q: '236. What is the purpose of swirling a sample of beer prior to nosing?',
    options: ['Volatilizes aroma compounds making them easier to smell', 'Alters the appearance of the sample which can influence perception', 'Helps to trap aroma compounds in the liquid, preventing them from escaping into the surrounding air','Decreases sensory fatigue'],
    answer:0,
  },
  {
    q: '237. What food safety hazards does HACCP look for?',
    options: ['Physical, chemical, bacterial and allergens', 'Physical, chemical, biological and allergens', 'Physical, chemical, biological and man made','Physical, chemical, biological and mineral'],
    answer:1,
  },
  {
    q: '238. An example of a simple to use, yet effective form of process control is',
    options: ['number of defects chart', 'process control chart', 'probability chart','specification chart'],
    answer:1,
  },
  {
    q: '239. When implementing the ISO 9001 system what are the first four steps to follow?',
    options: ['Develop documents, identify responsibilities, review performance, certification', ' Familiarise yourself with the standard, review performance, certification, start continuous improvement', 'Launch the system, review performance, certification, start continuous improvement','Familiarise yourself with standard, develop an implementation plan, identify responsibilities and develop documentation'],
    answer:3,
  },
  {
    q: '240. Which of these statements is false? When designing a sensory room it is imp',
    options: ['Ensure that the room is set up so that panellist can carry out individual assessments without being influenced by others', 'Use a perfumed air freshener to ensure that the room smells pleasant', 'Be able to control the lighting','Be able to control the temperature'],
    answer:1,
  },
  {
    q: '241. Which of the following can harm beer by exposing it to oxygen?',
    options: ['Oxygen entrapment in grist mill', 'Cracked seal on a wort chiller', 'Open manway during wort boil','Leaking valve on cold conditioning tank'],
    answer:3,
  },
  {
    q: '242. How is dissolved oxygen is typically measured?',
    options: ['Inline using a biochemical or electrochemical sensor', 'Offline using an optical or electrochemical sensor', 'Either inline or online using an optical or electrochemical sensor','Online using a venturi aerator'],
    answer:2,
  },
  {
    q: '243. Which of the following is likely the location of the first key control points for oxygen pickup during beer production?',
    options: ['Filtration after Cold Maturation', 'Dilution before Packaging', 'Separation after Cold Maturation','Separation before Cold Maturation'],
    answer:3,
  },
  {
    q: '244. When reviewing control charts, what should we react to?',
    options: ['Trends of results trending out of control', 'Single results away from the main trend', 'Single out of specification results','Each point as it is added to the chart'],
    answer:0,
  },
  {
    q: '245. Which of the following is a typical flavour defect resulting from oxygen pickup in beer?',
    options: ['Eggy', 'Malty', 'Bitter','Papery or cardboard'],
    answer:3,
  },
  {
    q: '246. Which of the following is not a key control point for monitoring oxygen levels?',
    options: ['Dilution', 'Packaging', 'Filtration','Warm maturation'],
    answer:3,
  },
  {
    q: '247. What best describes how a typical cleaning program operates in a CIP recovery system?',
    options: ['Pre-rinse to drain, send detergent to drain, rinse detergent to recovery tank, circulate disinfectant and rinse disinfectant to drain?', 'Pre-rinse to drain, circulate detergent, rinse detergent to recovery tank, circulate disinfectant and rinse disinfectant to fresh water tank?', 'Pre-rinse to drain, circulate detergent, rinse detergent to recovery tank, additional CIP cycle (acid, disinfection or hot water)','Pre-rinse to drain, circulate detergent, rinse detergent to drain, circulate disinfectant and drain circuit down?'],
    answer:2,
  },
  {
    q: '248. What impact does using high pressure rotary cleaning jets have?',
    options: ['Increased volumes of water can lead to high losses', 'Increased energy utilisation to power the rotary jet and for higher detergent temperatures', 'Increased mechanical action means that detergent pooling in vessels is no longer a problem','Increased mechanical action can potentially lower cleaning times and detergent strengths'],
    answer:3,
  },
  {
    q: '249. Poor cleaning can lead to layers of protected microbial growth, what are these called?',
    options: ['Organic soiling', 'Inorganic scale', 'Micro-colonies','Biofilms'],
    answer:3,
  },
  {
    q: '250. Bacteria are prokaryotic. Which of the following statements is correct?',
    options: ['Bacteria have large membrane bound organelles', 'Bacteria are multicellular', 'Bacteria have a nucleus','Bacteria have simple organelles'],
    answer:3,
  },
  {
    q: '251. Which statement is correct about rotary cleaning heads or jets?',
    options: ['They spray vessels according to the pattern of drilled spray holes', 'They cannot effectively clean vessel domes', 'They use high volume and low-pressure CIP systems','They must be regularly checked for rotation'],
    answer:3,
  },
  {
    q: '252. How can CIP systems effectively reduce waste?',
    options: ['By shortening CIP times', 'By using a recovery CIP system', 'By lowering detergent concentrations','By increasing cleaning and rinse water temperatures'],
    answer:1,
  },
  {
    q: '253. Alcoholic products are inherently protected against which type of bacteria?',
    options: ['Acetobacter.', 'Lactobacillus', 'Zymomonas','Pathogens'],
    answer:3,
  },
  {
    q: '254. How can a single use CIP system be best described?',
    options: ['Low in capital cost and flexible in operation', 'High in capital and operating costs', 'Low in operational costs and environmental impact','High in environmental impact and inflexible'],
    answer:0,
  },
  {
    q: '255. Which statement is the most correct, for sodium hydroxide detergents?',
    options: ['Used at continual higher temperatures for more effective cleaning', 'Used for the sanitisation of pipes and vessels', 'Used for inorganic soil removal and negatively reacts with aluminium, producing carbon dioxide gas','Used for organic soil removal and negatively reacts with aluminium and carbon dioxide'],
    answer:3,
  },
  {
    q: '256. Which of the following statements is correct for about a fungus?',
    options: ['Is always unicellular', 'Does not photosynthesise', 'Does not infect humans','Does not produce alcohol'],
    answer:1,
  },
  {
    q: '257. For effective cleaning, what can Sinners` circle can be described as?',
    options: ['Maximising detergent temperature and strength to minimise time', 'Maximising the use of time, temperature, mechanical action and detergent concentration', 'Minimising the use of mechanical action and energy, to maximise the action of detergents','Optimisation of time, mechanical action, temperature and detergent strength'],
    answer:3,
  },
  {
    q: '258. What do Cleaning in Place (CIP) systems allow us to achieve primarily?',
    options: ['Quicker and cheaper cleaning programmes', 'Safer and more hygienic cleaning programmes', 'No manual intervention with production vessels','More automated and flexible cleaning programmes'],
    answer:1,
  },
  {
    q: '259. What do we measure alongside the type of organism to better control microbial contamination?',
    options: ['The toxins produced', 'Rate (or amount) of contamination', 'Size of the individual cells','The by-products causing off flavours'],
    answer:1,
  },
  {
    q: '260. Which alternative to chemical sanitisers, can effectively kill microbes?',
    options: ['Chlorine dioxide', 'Chlorine', 'Ultra-violet light','Peracetic acid'],
    answer:2,
  },
  {
    q: '261. For effective cleaning, the correct course of action will be?',
    options: ['Maximising the use of time, temperature, mechanical action and detergent concentration', 'Maximising detergent temperature and strength to minimise time', 'Minimising the use of mechanical action and energy, to maximise the action of detergents','Optimisation of time, mechanical action, temperature and detergent strength'],
    answer:3,
  },
  {
    q: '262. What best describes a recovery CIP system?',
    options: ['A CIP recovery system consists of a tank and a piping circuits that can circulate detergent and rinse water to drain?', 'A CIP recovery system consists of a series of tanks and piping circuits that can circulate and return detergent and rinse water to drain', 'A CIP recovery system consists of a series of tanks and piping circuits that can circulate and return detergent and rinse water to its original tanks','A CIP recovery system consists of a series of tanks and piping circuits that can circulate and return detergent to its original tanks?'],
    answer:2,
  },
  {
    q: '263. Which statement is correct for a mould?',
    options: ['Is not a type of fungus', 'Can produce harmful toxins', 'Do not infect dry cereal grains','Do not infect humans'],
    answer:1,
  },
  {
    q: '264. Fixed spray balls in large vessels, gives a cleaning process with what?',
    options: ['High water losses and with a lower degree of cleaning', 'Long cleaning durations and shadow areas reduces cleaning', 'High volumes and low pressures is used where scouring is achieved by run off','High pressures and low volumes are used to scour the vessels'],
    answer:2,
  },
  {
    q: '265. What are the key factors to limit microbial growth?',
    options: ['Temperature, time, pH and nutrients', 'Nutrients, pH, oxygen and water', 'Time, pH, temperature and oxygen','pH, temperature, carbon dioxide and oxygen'],
    answer:0,
  },

  {
    q: '266. What impact does using high pressure rotary cleaning jets have?',
    options: ['Increased energy utilisation to power the rotary jet and for higher detergent temperatures', 'Increased volumes of water can lead to high losses', 'Increased mechanical action can potentially lower cleaning times and detergent strengths','Increased mechanical action means that detergent pooling in vessels is no longer a problem'],
    answer:2,
  },
  {
    q: '267. What is the financial reason carry out maintenance?',
    options: ['Insurance costs are higher on unmaintained plant and equipment', 'Banks charge higher interest rates for loans on unmaintained equipment', 'Carrying out maintenance is cheaper than running the plant and equipment, as less people are needed','A major investment has been made in the plant and equipment and it needs to be maintained to get the most from that investment'],
    answer:3,
  },
  {
    q: '268. Carbon dioxide is mostly generated from..',
    options: ['the burning of fossil fuels', 'the farming of livestock', 'plant photosynthesis','yeast fermentations'],
    answer:0,
  },
  {
    q: '269. What can predictive maintenance programmes also lead to?',
    options: ['Less highly skilled maintenance staff requirements', 'No breakdown maintenance', 'No spares holding','More accurate cost and budget predictions'],
    answer:3,
  },
  {
    q: '270. Which of the following is the correct order of the hierarchy of controls?',
    options: ['Elimination, administrative, substitution, engineering, PPE', 'Elimination, engineering, substitution, administrative, PPE', 'Elimination, engineering, administrative, substitution, PPE','Elimination, substitution, engineering, administrative, PPE'],
    answer:3,
  },
  {
    q: '271. What is run to fail maintenance is also known as?',
    options: ['Breakdown maintenance', 'Preventative maintenance', 'Condition-based maintenance.',' Loss leader maintenance'],
    answer:0,
  },
  {
    q: '272. What is planned maintenance a type of?',
    options: ['Condition-based monitoring', 'Predictive maintenance', 'Preventative maintenance','Corrective maintenance'],
    answer:2,
  },
  {
    q: '273. Spent grains can be used for the generating renewable energies of',
    options: ['Biogas and Biomass', 'Biogas and bioethanol', 'Biomass and bioethanol','Bioethanol and peat'],
    answer:1,
  },
  {
    q: '274. What must water used for boilers be?',
    options: ['Clean and pH neutral', 'Clean non-corrosive scaling (soft)', 'Clear, colourless and odourless','Potable'],
    answer:1,
  },
  {
    q: '275. Other than for cost savings, carbon dioxide is primarily collected for',
    options: ['High loss reasons', 'Environmental and sustainability reasons', 'Safety reasons','High usage reasons'],
    answer:1,
  },
  {
    q: '276. Which is true about reliability centred maintenance (RCM)?',
    options: [' It can only be used as a standalone maintenance programme', 'It uses failure effects to determine the most appropriate and cost-effective maintenance programme', 'It does not use preventative maintenance techniques','It only uses skilled maintenance staff'],
    answer:1,
  },
  {
    q: '277. What priority information is required for the handling and storage of all hazardous chemicals?',
    options: ['The storage temperature and shelf life of the chemical', 'The MSDS and container labelling', 'Container labelling and the training manual','The chemical rating for explosions and burns'],
    answer:1,
  },
  {
    q: '278. What is the BOD (biological oxygen demand)?',
    options: ['The amount of nutrients used by microorganisms to deoxygenate the water', 'The amount of oxygen needed to aerate water to sustain microbial life', 'The amount of oxygen required by microbes to digest the available nutrients','The amount of oxygen consumed to affect eutrophication of a water system'],
    answer:2,
  },
  {
    q: '279. The five main influences of maintenance are',
    options: ['Plant availability, production costs, product quality, safety and environmental impacts', 'Plant efficiencies, plant profit, staff morale, maintenance costs and product quality', 'Workshop efficiency, plant downtime, maintenance costs, staff morale and safety','Downtime, factory efficiencies, cost control, safety and spares management'],
    answer:0,
  },
  {
    q: '280. The suffocating properties of Carbon Dioxide are enhanced by what fact?',
    options: ['It spreads very quickly to overcome unaware people', 'It burns mucous membranes and is toxic to humans', 'It is toxic and kills instantly','It is colourless, odourless and heavier than air'],
    answer:3,
  },
  {
    q: '281. The dust pentagram includes the dust explosion criteria of; an ignition source, a confined space, grain dust and its dispersal and...',
    options: ['flammable material', 'oxygen', 'dry conditions','a spark'],
    answer:1,
  },
  {
    q: '282. What are the two main parameters used to impose an effluent tariff?',
    options: ['BOD and COD', 'pH and total solids', 'Temperature and pH','Volume and strenght'],
    answer:3,
  },
  {
    q: '283. What needs to be done to yeast before it can be fed to animals?',
    options: ['It needs to be killed', ' It needs to be blended with spent grains to increase vitamin levels', '. It needs to be treated with enzymes to break down the cellulose','It needs to be dried and compressed'],
    answer:0,
  },
  {
    q: '284. What is a HAZOP?',
    options: ['A risk assessment, to prioritise all risks', 'A study that defines hazards associated with plant and its operations', 'A hazard and analysis study of all plant and equipment','A safety suit, used as critical PPE in the handling of toxic chemicals'],
    answer:1,
  },
  {
    q: '285. As well as potentially causing fires and explosions, what can grain dust cause?',
    options: ['Farmers lung in humans', 'Blindness, if exposed for long durations', 'Silo-fillers disease','Acute hearing loss'],
    answer:0,
  },
  {
    q: '286. The three main co-products that can typically be found in breweries are',
    options: ['Carbon dioxide, spent yeast and spent grains', 'Spent yeast, spent grains and weak wort', 'Carbon dioxide, spent yeast and trub','Malt dust, unmilled malt and weak wort'],
    answer:0,
  },
  {
    q: '287. What are tilted lamella plates typically used for?',
    options: ['Aeration, in aerobic effluent treatment', 'Coagulating solid particles in effluent', 'Tertiary effluent treatment','Removing settleabe solids from effluent'],
    answer:3,
  },
  {
    q: '288. Where can thermal imaging, vibration and oil analysis be used?',
    options: ['To eliminate the need for planned maintenance', 'In corrective action maintenance', 'In predictive maintenance programmes','To reduce the critical spares holding costs'],
    answer:2,
  },
  {
    q: '289. Optimising the use of production resources can be best described as.',
    options: ['Recycling to save on supply costs', 'Reduce, reuse, recycle and recover, minimising both usage and waste', 'Reduce and recycle to save on resources and material storage space','Reduce environmental impact by minimising waste and emissions'],
    answer:1,
  },
  {
    q: '290. Which statement best defines the ecological importance of carbon dioxide?',
    options: ['It can be recycled and can save a company money', 'It is a major greenhouse gas,responsible for climate change', 'It is inert and can be used to carbonate a variety of beverages',' It is colourless and odourless and can kill people'],
    answer:1,
  },
  {
    q: '291. Which of the following is best described as, an event that can cause harm to a person?',
    options: ['Risk', 'Opportunity', 'Hazard','Problem'],
    answer:2,
  },
  {
    q: '292. Why is recovered carbon dioxide liquefied?',
    options: ['To remove aroma molecules', 'To enable it to be stored more and transported more cheaply', ' To remove water by freezing','To allow it to be injected into beer'],
    answer:1,
  },
  {
    q: '293. What is a key goal of a maintenance programme?',
    options: ['To limit the amount of changeovers', 'Minimise plant downtime', '`Sweat the assets` to maximise profits','Use the minimum amount of spares'],
    answer:1,
  },
  {
    q: '294. Which brewery component has the greatest COD value, if discharged to a sewer?',
    options: ['Yeast', 'Beer', 'Collapsed','Spent grains'],
    answer:0,
  },
  {
    q: '295. What will have the greatest impact on sustainability in the brewing industry?',
    options: ['Harvesting CO within the fermentation process', 'Reduction of chemical pest control', 'Energy reduction in the brewery','Encouragement of sustainable barley growing'],
    answer:2,
  },
  {
    q: '296. What do modern work health and safety programs include?',
    options: ['Costs and budgeting', 'Wellbeing, as part of an organisational culture', 'Everybody in the workplace','Everything in its place and a place for everything'],
    answer:1,
  },
  {
    q: '297. Which technology will NOT demineralise water?',
    options: ['De-ionisation', 'Cation exchange', 'Reverse osmosis','Cation and anion exchange'],
    answer:1,
  },
  {
    q: '298. Brewers spent grains are more commonly',
    options: ['used as feed for animals', 'dewatered before sending to drain', ' sent directly to the effluent treatment plant','dried and compressed to be used for dog treats (food)'],
    answer:0,
  },
  {
    q: '299. What is it best to do in all spillage situations?',
    options: ['Stop consult think act', 'Immediately push the fire alarm buttons', 'Immediately flush the spillage to the drain','Immediately use water to dilute the spill'],
    answer:0,
  },
  {
    q: '300. In water treatment plants, what does activated carbon filters principally remove?',
    options: ['In water treatment plants, what does activated carbon filters principally remove?', 'Oxygen', 'Chlorine and trihalomethane compounds','Carbon dioxide'],
    answer:2,
  },
  {
    q: '301. Why must chlorinated cleaning chemicals be stored separately to acids?',
    options: ['Chlorinated chemicals react with acids to produce deadly chlorine gas', 'Chlorinated chemicals react with acids to produce heat which can cause fires', 'Chlorinated chemicals react with acids to produce a corrosive foam which causes serious burns','Chlorinated chemicals react with acids to produce a poisonous liquid that kills aquatic organisms'],
    answer:0,
  },
  {
    q: '302. A co-product can best be described as',
    options: ['An alternate brand, made from different raw materials, that is produced by the same plant and processes', 'free promotional materials like coasters dispatched with the beer', 'a waste stream','A prduct other than the main product'],
    answer:3,
  },
  {
    q: '303. As part of sustainable production what is a wort preheater used for?',
    options: ['To heat the wort for dry hopping requirements', 'Enhancing the colour of wort before the kettle', 'Heat energy revovery','To strip the wort of DMS'],
    answer:2,
  },
  {
    q: '304. A typical co-product of anaerobic effluent treatment is?',
    options: ['Methane gas', 'Hydrogen gas', 'Heat energy','Propane gas'],
    answer:0,
  },
  {
    q: '305. How are water soluble impurities removed from recovered carbon dioxide?',
    options: ['Compression', 'Scrubbing', 'Liquefaction','Deodourising'],
    answer:1,
  },
  {
    q: '306. Activated sludge is...',
    options: ['Used by upward flow anaerobic sludge blanket (UASB)', 'Used by a fluidised bed reactor', 'Peat','The most common in an aerobic effluent treatment system'],
    answer:3,
  },
  {
    q: '307. A typical value for suspended solids in brewery effluent is?',
    options: ['5 000 mg/L', '5 mg/L', '500 mg/L','55 kg/L'],
    answer:2,
  },

  {
    q: '308. What is a risk assessment?',
    options: ['A means of managing the risk of an activity', 'A risk assessment is used to determine the level of risk posed by a hazard during a particular activity', 'A procedure used to assess the severity of a hazard','A study of the causes and impacts of failures in critical pieces of process safety equipment'],
    answer:1,
  },
  {
    q: '309. What is a renewable energy formed from anaerobic digestion?',
    options: ['Biomass', 'Biogass', 'Anthracite','Peat'],
    answer:1,
  },
  {
    q: '310. pH and particulate matter effluent treatment is also known as what?',
    options: ['Primary treatment', 'Secondary treatment', 'Tertiary treatment','Flocculation and sedimentation'],
    answer:0,
  },
  {
    q: '311. Brewers spent grains are more commonly',
    options: ['Used as feed for animals', 'Dried and compressed to be used for dog treats (food)', 'Sent directly to the effluent treatment plant','Dewatered before sending to drain'],
    answer:0,
  },
  {
    q: '312. What is brewery effluent can also be known as?',
    options: ['Emissions', 'Co-products', 'Waste water','By-products'],
    answer:2,
  },
  {
    q: '313. Which statement best defines the ecological importance of carbon dioxide?',
    options: ['It can be recycled and can save a company money', 'It is inert and can be used to carbonate a variety of beverages', 'It is a major greenhouse gas, responsible for climate change','It is colourless and odourless and can kill people'],
    answer:2,
  },
  {
    q: '314. Heat energy is expensive. What is the key',
    options: [' Usage to save the finite fossil fuels that will run out', 'The use of fossil fuels and produce clean energy', 'The need for heat in production processes','Heat usage to save costs'],
    answer:1,
  },
  {
    q: '315. What is the financial reason carry out maintenance?',
    options: ['Banks charge higher interest rates for loans on unmaintained equipment', 'A major investment has been made in the plant and equipment and it needs to be maintained to get the most from that investment', 'Carrying out maintenance is cheaper than running the plant and equipment, as less people are needed','Insurance costs are higher on unmaintained plant and equipment'],
    answer:1,
  },
  {
    q: '316. The five main influences of maintenance are',
    options: ['Workshop efficiency, plant downtime, maintenance costs, staff morale and safety', 'Plant availability, production costs, product quality, safety and environmental impacts', 'Plant efficiencies, plant profit, staff morale, maintenance costs and product quality','Downtime, factory efficiencies, cost control, safety and spares management'],
    answer:1,
  },
  {
    q:'Which is NOT a reason why heat generated during fermentation must be removed?',
    options: ['Maintain the set temperature to avoid off-flavor formation','Reduce fobbing in the tank due to yeast activity','Ensure the yeast remain viable','Avoid long fermentation times'],
    answer:3,
  },
  {
    q:'Which one of the following processes does not normally occur during the malting of barley?',
    options: ['Steeping','Germination','Milling','Kilning.'],
    answer:2,
  },
  {
    q:'Which sugar can lager yeast ferment but ale yeast CANNOT?',
    options: ['Maltriose','Maltose','Melibiose','Glucose'],
    answer:2,
  },
  {
    q:'Which of the following is not a benefit from implementation of a reliability centered maintenance (RCM) program?',
    options: ['Decreased waste and quality defects','Improved system availability','Optimized spare parts inventory','Providing training opportunities for operations personnel'],
    answer:2,
  },
  {
    q:'For yeast to be pitched into a fermentor, the viability should ideally be which of the following?',
    options: ['Greater than 90%','Greater than 95%','Greater than 80%.','100%'],
    answer:0,
  },
  {
    q:'What is the purpose of the mash?',
    options: ['To ensure that yeast has nutrients for growth','To extract hops and give beer a hoppy aroma','To convert starch into fermentable sugars','To mix water and milled malt together'],
    answer:2,
  },
  {
    q:'Which is NOT a way document change is controlled?',
    options: ['Maintaining a master list of document numbers','Documentation of changes to document','Approving changes before posting','Granting access only to authorized personnel'],
    answer:3,
  },
  {
    q:'What characteristic of the local water supply led to the development of fine pale lager in the Pilsen region?',
    options: ['The water has a good balance of calcium and magnesium salts','The water is rich in calcium sulphate','The water is very soft','The water is rich in calcium carbonate'],
    answer:2,
  },
  {
    q:'Which flavor/aroma defect is NOT a result of high dissolved oxygen content?',
    options: ['Diacetyl','Iso-valeric','Tans-2-nonenal','Ribes/catty'],
    answer:0,
  },
  {
    q:'Which process area or equipment consumes the 2nd highest amount of electrical energy?',
    options: ['Utilites','Packaging','Brewhouse','Regrigeration'],
    answer:1,
  },
  {
    q:'Which is NOT a major product of a Pectinatus infection?',
    options: ['Acetic acid','Turbidity','Hydrogen sulfide(H2S)','Caproic acid'],
    answer:3,
  },
  {
    q:'Which one of the following lists of beer types shows the beers in increasing order of colour intensity?',
    options: ['Pilsner < pale ale < stout < mild ale','Pilsner < mild ale < bitter ale < stout','Mild ale < Pilsner < bitter ale < stout','Pilsner < bitter ale < mild ale < stout'],
    answer:3,
  },
  {
    q:'Which adjunct requires the use of a cereal cooker?',
    options: ['Maize flakes','Maize grits','Roasted barley','Torrified wheat'],
    answer:1,
  },
  {
    q:'Which accurately describes a maintenance program that only attends to equipment when it stops working?',
    options: ['Breakdown maintenance','Predictive maintenance','Preventative maintenance','No maintenance'],
    answer:0,
  },
  {
    q:'What is the wort precursor to yeast esters?',
    options: ['Fermentable sugars','Vitamins','Lipids','Amino acids'],
    answer:3,
  },
  {
    q:'Which of the following is not commonly used to remove organic soils?',
    options: ['Nitric acid','Silicates','Phosphates','Caustic soda'],
    answer:0,
  },
  {
    q:'Hops added at which time during the boil contribute the greatest bitterness to the beer?',
    options: ['Any','Middle','ENd','Start'],
    answer:3,
  },
  {
    q:'Which type of adjunct retains its enzymatic activity after processing?',
    options: ['Torrified Wheat','Crystal Malt','Maize Grits','Wheat Malt'],
    answer:3,
  },
  {
    q:'The main hop precursor to bitterness in beer is which of the following?',
    options: ['Essential Oils','Iso-alpha-acids','Alpha-acids','Beta-acids'],
    answer:2,
  },
  {
    q:'Which one of the following lists of processes for brewing a beer for subsequent packaging is in the correct sequential order?',
    options: ['Mashing, wort boiling, wort cooling, yeast pitching, fermentation, conditioning, filtration','Mashing, wort boiling, yeast pitching, wort cooling, fermentation, conditioning, filtration','Mashing, wort boiling, wort cooling, yeast pitching, fermentation, filtration, conditioning','Mashing, wort boiling, yeast pitching, wort cooling, fermentation, filtration, conditioning'],
    answer:0,
  },
  {
    q:'Which one of the following statements is not correct?',
    options: ['Cask-conditioned beer has live yeast cells in the package','The carbon dioxide level of cask-condioned beer is lower than most other beer types','The flavour of cask-conditioned beer does not change after delivery to trade','Cask-conditioned beer is usually clarified with isinglass finings'],
    answer:2,
  },
  {
    q:'Which of the following ions does carbon filtration remove from water?',
    options: ['Chloride','Sulphate','Nitrate','Bicarbonate'],
    answer:0,
  },
  {
    q:'A pure yeast culture is defined as:',
    options: ['Isolated and streaked from a plate','A domesticated strain','Grown from a single cell','Free from bacterial or wild yeast contamination'],
    answer:2,
  },
  {
    q:'Acid washing ale yeast destroys which of the following microorganisms?',
    options: ['Wild yeast','Pilsner yeast','Mold','Bacteria'],
    answer:3,
  },
  {
    q:'Process and product specifications require which of the following?',
    options: ['Frequent monitoring to ensure the process is in control','Corrective action to be taken if the process is out of control','A target value with acceptable range for the results','A documented and controlled procedure'],
    answer:2,
  },
  {
    q:'Which piping design feature is used to minimize soil accumulation?',
    options: ['Sweeping elbows','Goal posts','U-bends','Long Tees'],
    answer:0,
  },
  {
    q:'What is the most widely used wort clarification process?',
    options: ['Whirlpool','Coolship','Hop back','Centrifuge'],
    answer:0,
  },
  {
    q:'What flavor component can sulphate enhance in beer?',
    options: ['Harshness','Sweetness','Mouthfeel','Bitterness'],
    answer:3,
  },
  {
    q:'Which one of the following processes does not normally occur between wort boiling and fermentation?',
    options: ['Yeast pitching','Trub separation','Carbonation','Wort cooling'],
    answer:2,
  },
  {
    q:'Which one of the following materials would not normally be used in the production of a lager beer?',
    options: ['Maize grits','Wheat flour','Malted barley','Soya flour'],
    answer:3,
  },
  {
    q:'Which is NOT a potential source of metallic off-flavor in beer?',
    options: ['Silica gel','Diatomaceous earth','Stainless steel pipes','Aluminum cans'],
    answer:0,
  },
  {
    q:'Which is NOT a principle of reliability centered maintenance (RCM)?',
    options: ['Organize the workplace to reduce time spent looking for tools','Preservation of system function','Identification of potential failure modes','Selecting the most cost effective maintenance task to mitigate failure'],
    answer:0,
  },
  {
    q:'What feature must an enclosed fermentation vessel have to minimize the risk of explosion?',
    options: ['Manway','Anti-vacuum valve','Pressure transmitter','Pressure relief valve'],
    answer:3,
  },
  {
    q:'How much more energy is produced by the respiration of glucose by yeast compared with fermentation?',
    options: ['25 Times',' 5 Times','50 Times','10 Times'],
    answer:0,
  },
  {
    q:'Which of the following is FALSE about yeast that is allowed to rest in the fermentation vessel for long periods before harvest?',
    options: ['It may have excess trub mixed in','It has low vitality','It may suffer autolysis','It has low viability'],
    answer:0,
  },
  {
    q:'What process are higher alcohols a by-product of?',
    options: ['Protein synthesis','Cell replication','Lipid and sterol synthesis','Ester formation'],
    answer:0,
  },
  {
    q:'Which of the following statements about mash filters is false?',
    options: ['Lower water usage per hectoliter of wort produced compared to a lauter tun','Higher extract recovery is observed compared to lauter tuns','Greater flexibility in mash size is possible than with a lauter tun','More brew cycles per day are possible than with a lauter tun'],
    answer:2,
  },
  {
    q:'Which factor does NOT impact wort boiling efficiency?',
    options: ['Boil intensity','Boil duration','Wort temperature','Kettle volume'],
    answer:3,
  },
  {
    q:'Which is NOT a goal of total productive maintenance (TPM)?',
    options: ['Autonomous maintenance','Improve equipment effectiveness','Train staff on relevant maintenance tasks','Decrease the cost of maintenance activities'],
    answer:3,
  },
  {
    q:'How does compressed air or oxygen injected into yeast or wort differ from compressed air used for valve operation or instrumentation?',
    options: ['Clean/particulate-free','Sterile','Oil-free','Dry'],
    answer:1,
  },
  {
    q:'What is NOT a standard use of carbon dioxide (CO2)?',
    options: ['ackaging line valve operation','Undercover gassing prior to seaming','Package flushing before filling','Tank top pressure'],
    answer:0,
  },
  {
    q:'What is NOT an advantage of oxygen over compressed air for wort aeration?',
    options: ['Gas must be sterilized','Low to no nitrogen levels minimizes foaming','Higher levels of wort dissolved oxygen as possible','Smaller quantities of gas are required for the same dissolved oxygen level'],
    answer:1,
  },
  {
    q:'Which is NOT a method for controlling oxygen pickup during filtration?',
    options: ['Using horizontal tanks instead of vertical tanks','Flushing pipes with deaerated water before running beer','Ensuring that any recovered beer used is oxygen-free','Use deaerated water for mixing filter aid additions'],
    answer:0,
  },
  {
    q:'The correct order for malting barley into ale or lager malt from start to finish is which of the following?',
    options: ['Germination, steeping, kilning','Steeping, germination, roasting','Germination, steeping, roasting','Steeping, germination, kilning'],
    answer:3,
  },
  {
    q:'Yeast requires which of the following in order to build sterols, essential components of cell membrane?',
    options: ['Oxygen','Carbon dioxide','Light','Ethanol'],
    answer:0,
  },
  {
    q:'Beerstone and hard water buildup is commonly removed using:',
    options: ['Hydrogen peroxide','Peroxyacetic acids','Caustic soda','Phosphoric acid'],
    answer:3,
  },
  {
    q:'Which gas produced by the burning of fossil fuels in the brewing industry is the largest percentage of total greenhouse gas production globally?',
    options: ['Carbon dioxide','Methane','Nitrous oxide','Carbon monoxide'],
    answer:0,
  },
  {
    q:'Which one of the following lists of raw materials for a premium lager places the quantities used, correctly, in decreasing order?',
    options: ['Water  >  malt  >  yeast  >  hops','Yeast  >  water  >  malt  >  hops','Malt  >  water  >  hops  >  yeast','Malt  >  water  >  yeast  >  hops'],
    answer:0,
  },
  {
    q:'What is the purpose of screening malt before milling?',
    options: ['To ensure all foreign material is removed','To ensure all dust is removed','To ensure all broken malt kernels are removed','To ensure consistency of malt kernel size'],
    answer:3,
  },
  {
    q:'At which one of the following process stages is the inclusion of oxygen desirable?',
    options: ['Mashing','Wort boiling','Yeast pitching','Conditioning'],
    answer:2,
  },
  {
    q:'Which is false about pooling of CIP fluid at the bottom of tanks?',
    options: ['Soaking action penetrates scale and buildup','Burst delivery achieves effective scrubbing on dish bottoms','Suspended soils can be redeposited on surface','Low flow doesn’t clean surface of dish bottoms well'],
    answer:0,
  },
  {
    q:'Which describes facultative anaerobes?',
    options: ['Can grow without oxygen but can utilize it if present','Requires oxygen for growth','Cannot use oxygen for growth and can tolerate it','Cannot use oxygen for growth and cannot tolerate it'],
    answer:0,
  },
  {
    q:'Which is false about typical recovered rinse water use in recovered/reuse CIP systems?',
    options: ['Can be supplemented with fresh water','Recovered from post-detergent rinse and final rinse','Used to make up CIP chemical colutions','Only used to pre-rinse before detergent cleaning'],
    answer:2,
  },
  {
    q:'Which process area consumes the greatest amount of thermal energy?',
    options: ['Utilities','Brewhouse','Administration','Packaging'],
    answer:1,
  },
  {
    q:'Which of the following statements is TRUE about the water typically used to make pilsners?',
    options: ['Hard water with low mineral content','Soft water with high mineral content','Hard water with high mineral content','Soft water with low mineral content'],
    answer:3,
  },
  {
    q:'Which organism can ONLY grow in the presence of air/oxygen?',
    options: ['Saccharomyces','Pectinatus','Acetobacter','Megasphaera'],
    answer:2,
  },
  {
    q:'Which one of the following actions will have the most damaging effect on beer quality during its shelf life, if its control is out-of-specification during packaging? ',
    options: ['Maintaining hygiene standards during rinsing and filling of packages','Filling packages at low temperature to ensure that CO2 control is correct reducing air pickup to a minimum throughout the packaging process','Reducing air pickup to a minimum throughout the packaging process','Filling packages against counter pressure to avoid fobbing and CO2 loss'],
    answer:2,
  },
  {
    q:'From the start to the end of lauter, the collected wort gravity:',
    options: ['Increases','Remains constant','Decreases','Fluctuates'],
    answer:2,
  },
  {
    q:'What impact does mash temperature have on enzymatic activity?',
    options: ['Activity is uncontrollable at high temperatures','Activity is does not occur at low temperatures','It is optimal between a certain range','Activity is unaffected by temperature'],
    answer:2,
  },
  {
    q:'Which is true about turbulent flow during CIP?',
    options: ['Prevents pooling in tank bottoms','Generates scrubbing action','Can clean dead legs','Can clean long tees'],
    answer:1,
  },
  {
    q:'What compound or product is most commonly used as in wort kettle finings?',
    options: ['Sodium bicarbonate','Carrageenan','Citric acid','Isinglass'],
    answer:1,
  },
  {
    q:'What purpose do chelating agents serve in cleaning chemicals?',
    options: ['Dissolve organic matter and carry it away','Decrease surface tension allowing better dispersion on the surface','Enable easier rinsing of detergents from surfaces','Bind metal ions that interfere with detergent action'],
    answer:3,
  },
  {
    q:'Which is vessel or piece of equipment is NOT typically sanitized by hot water?',
    options: ['Yeast brinks','Pasteurizers','Gas sterilizing filters','Diatomaceous earth filters'],
    answer:2,
  },
  {
    q:'Which of the following is NOT a purpose of HACCP?',
    options: ['To prevent out of specification beer in the market','To prevent brand damage','To prevent product recalls','To prevent illness or injury to consumers'],
    answer:0,
  },
  {
    q:'In which part of the barley kernel are starch granules contained?',
    options: ['Endosperm','Aleurone','Embryo','Husk'],
    answer:0,
  },
  {
    q:'Which is NOT used as a chemical sanitizer?',
    options: ['Ozone','Acetic acid','Peroxyacetic acid','Chlorine dioxide'],
    answer:1,
  },
  {
    q:'Which type of pump does NOT require a bypass to ensure piping before and after are cleaned appropriately?',
    options: ['Piston','Peristalic','Centrifugal','Lobe'],
    answer:2,
  },
  {
    q:'Which of the following does NOT promote gas absorption during wort oxygenation?',
    options: ['Small bubbles','Turbulent flow','Low temperature','Low pressure'],
    answer:3,
  },
  {
    q:'In a typical six sieve grist analysis, which fraction is found on the top three sieves?',
    options: ['Grits','Fines','Flour','Husk'],
    answer:3,
  },
  {
    q:'Which type of hop product prevents skunky or light-struck aroma when beer is exposed to UV light?',
    options: ['Isomerized pellets','CO2 extracts','Whole cones','Reduced extracts'],
    answer:3,
  },




  {
    q:'In which plant performance improvement system are operators trained to pay attention to detail, take pride in their equipment, and to adopt a zero defect policy?',
    options: ['Total productive maintenance (TPM)','The 5S system','Reliability-centred maintenance (RCM)','Planned preventative maintenance'],
    answer:0,
  },
  {
    q:'Why are beer quality parameters expressed as a range, rather than a single precise figure? ',
    options: ['Because the samples can change whilst waiting to be analysed','Because beer is made from natural materials that are variable','Because the laboratory tests do not give repeatable results','Because the laboratory instruments used are not accurate enough'],
    answer:1,
  },
  {
    q:'A control chart is most effective for showing which of the data',
    options: ['The breakdown of electricity usage around a brewery','Showing trends of an analytical parameter','Cost of production in each department','Pore sizes in a sterile filter membrane'],
    answer:1,
    img:'img/trend.jpg'
  },
  {
    q:'Triangular taste tests involve',
    options: ['three tasters tasting the same beer','tasting three samples which are all different','tasting three samples; two the same and one different','representatives from three breweries tasting the same beer'],
    answer:2,
  },
  {
    q:'Beer is returned with an acetaldehyde (Sour apple) taste taint. What is the probable cause of this flavour fault?',
    options: ['Contamination of beer by caustic','Infected beer by bacteria or wild yeast','Contaminant of beer with chlorine based sterilant','Contaminant with ammonia refrigerant'],
    answer:1,
  },
  {
    q:'Dissolved oxygen is detrimental to final beer quality because it can cause',
    options: ['the beer to over-foam','the beer to develop an unpleasant sulphury aroma (“light struck”)','cardboard and papery flavours as well as haze','the colour of the beer to decrease'],
    answer:2,
  },
  {
    q:'Enterobacter is a source of quality problems in brewing because it...',
    options: ['its a standard beer spoilage organism','produces off flavours in wort','reduces oxygen in wort','indicate water pollution'],
    answer:3,
  },
  
  {
    q:'One of the benefits of a Quality System is that',
    options: ['operations are carried out according to traditional methods','operations are carried out in the quickest method possible','operations are carried out according to defined procedures','operations can be carried out by untrained personnel'],
    answer:2,
  },
  
  {
    q:'Only one of the following statements is true. Which is it? Documented procedures are there to:',
    options: ['be referred to during audits','explain to visitors how the brewery is operated','explain to suppliers why the brewery has set a particular standard','explain what has to be done, when and how it should be done'],
    answer:3,
  },
  
  {
    q:'Choose from the following list the TWO best combination of properties for formulated brewery detergent ?',
    options: ['A&B','B&C','B&D','C&E','A&D'],
    answer:2,
    img:'img/bd.jpg'
  },
  
  {
    q:'Which of the following methods is used for rapid determination of the hygiene of a tank?',
    options: ['Plating rinse water samples','Swabbing and plating sample','Visual inspection','Swabbing and bioluminescence'],
    answer:3,
  },
  
  {
    q:'In a formulated detergent what is the function of a chelating agent?',
    options: ['Active and dissolves organic soil','A material which can be used to reduce surface tension (wetting), the surface','Materials which can complex metal ions in solution, thereby preventing precipitation of the insoluble salts of the metal ions','A material which assists the rinsing of the detergent from the surface of the vessel'],
    answer:2,
  },
  
  {
    q:'A safety risk associated with strong oxidising agent is that....',
    options: ['A fire hazard','Scavenge oxygen from atmosphere','Corrosive when dilute','Degrade seals and hoses'],
    answer:0,
  },
  
  {
    q:'Calculate the amount of water that must be added to 100 hl of beer at 6.5% ABV to produce a beer containing 5% ABV',
    options: ['10 hl','30 hl','40 hl','50 hl'],
    answer:1,
  },
  
  {
    q:'Which effluent measurement is used to evaluate the amount of “treatment” required in a effluent plant?',
    options: ['Flow rate','Temperature','Volume','COD'],
    answer:3,
  },
  {
    q:'Which of the following treatments are required for water to be used as process water?',
    options: ['Removal of sulphates','Removal of bi- carbonates','Removal of chlorides','Removal of calcium'],
    answer:1,
  },
  {
    q:'Which of the following property of carbon dioxide is incorrect?',
    options: ['It is colourless','It asphyxiates','It is toxic at high levels','It is lighter than air'],
    answer:3,
  },
  {
    q:'Which set of operations most accurately represents the goals of sustainable development?',
    options: ['To recycle glass and cardboard','To distribute the beer via wholesalers','To minimise use of outside resources','To use cold detergents for sterilisation'],
    answer:2,
  },
  {
    q:'Which two of the following Cities are associated with Lager Beer?',
    options: ['D&E','A&B','C&D','B&D','A&E'],
    answer:0,
    img:'img/de.jpg'
  },
  {
    q:'Which two of the following represent reasons for storing beer in bright beer tank? ',
    options: ['A&C','B&C','E&D','A&F','E&A','C&D'],
    answer:1,
    img:'img/bc.jpg'
  },
  {
    q:'Which of the following filter designs does not uses diatomaceous earth for filtration',
    options: ['cross flow filter','candle filter','plate and frame filter','horizontal screen filter'],
    answer:0,
  },
  {
    q:'Which of the three following products can be used of filter aids on a plate and frame filter?',
    options: ['A,B&D','B,C&F','A,D&F','E,D&F','B,C&D','B,D&F'],
    answer:0,
    img:'img/abd.jpg'
  },
  {
    q:'Which type of maintenance task is usually associated with the infrared thermography (thermal imaging)?',
    options: ['Calibration','Lubrication','Lubricationg','Visual inspection'],
    answer:2,
  },
  {
    q:'Which of the following maintenance methods best describes “corrective maintenance”?',
    options: ['Total productive maintenance (TPM)','The 5S system','Breakdown Maintenance','Breakdown Maintenance'],
    answer:2,
  },
  {
    q:'Which process in a Quality System, should initiate corrective action?',
    options: ['Product specification','Process specification','Final inspection','Performance monitoring'],
    answer:0,
  },

  {
    q:'Which of the following statements about process control charts is correct?',
    options: ['A wide distribution curve indicates good control','A rolling average graph indicates the individual lows and highs','A cumulative sum (cusum) chart emphasises the direction of a trend','A simple chart plotting individual results is best for controlling a process'],
    answer:2,
  },
  {
    q:'Trueness to type profiling is used by (trained) tasters to:',
    options: ['Determine whether a beer meets the required flavour standards','Determine whether or not a beer has been packaged correctly','Assess the shelf-life potential of beers','Assess the level of contaminant present in a beer'],
    answer:0,
  },
  {
    q:'Which of the following pairs of flavour descriptors do not relate to oxidised beer?',
    options: ['Cardboardy and harsh','Papery and bready','Phenolic and sulphury','Bready and stale'],
    answer:2,
  },
  {
    q:'What typically happens to the dissolved oxygen content of beer in a bright beer tank?',
    options: ['It gradually reduces','It gradually increases','It remains unchanged until transferred to filler','It combines with dissolved nitrogen to form nitrogen dioxide'],
    answer:0,
  },
  {
    q:'The maximum level for dissolved oxygen in packaged beer generally accepted as good practice is ',
    options: ['1        ppb (parts per billion)','10      ppb (parts per billion)','100    ppb (parts per billion)','1000  ppb (parts per billion)'],
    answer:2,
  },
  {
    q:'Which of the following organisms is termed "aerobic":',
    options: ['Wild yeast','Acetobacter','Lactobacillus','Zymomonas'],
    answer:1,
  },
  {
    q:'Which of the following organisms has the appearance of “long rods” when viewed under the microscope in finished beer?',
    options: ['Lactobacillus ','Lactobacillus ','E .coli','Obesumbacteria'],
    answer:0,
  },
  {
    q:'Which procedure in a Quality System ensures that the instructions brewery employees are working to are current and valid?',
    options: ['Corrective action ','Review','Audit','Document control'],
    answer:3,
  },
  {
    q:'After the first three steps listed below:',
    options: ['A','B','C','D'],
    answer:2,
    img:'img/c1.jpg'
  },
  {
    q:'Wetting agents in a detergent formulation serve to:',
    options: ['Reduce surface tension','Disperse soil','Dissolve soil','Remove scale'],
    answer:0,
  },
  {
    q:'The purpose of a detergent is to:',
    options: ['Clean & sterilise','Kill all micro-organism','Prevent re-infection ','Remove soil'],
    answer:1,
  },
  {
    q:'A large diameter pipe in a cleaning circuit may not be as effectively cleaned as smaller ones because:',
    options: ['The heat losses are greater','The pressure in the pipe is lower','The flow velocity is lower','The surface area to be cleaned is greater'],
    answer:2,
  },
  {
    q:'Burst rinsing is often a feature of the CIP cycle when tanks are cleaned using spray-balls. Why?',
    options: ['It ensures more effective scavenging','Less water is used','The rinsing is more effective','The final burst rinse can be recovered for subsequent re-use'],
    answer:2,
  },
  {
    q:'Which combination of the following components is present in a typical total loss CIP system?',
    options: ['A','B','C','D'],
    answer:3,
    img:'img/d1.jpg'
  },

  {
    q:'52. Which of the following is a useful way of depicting the relative contributions (from different areas of the brewery) of effluent volume?',
    options: ['Histogram (vertical bar chart)','Graph','Pie chart','Distribution curve'],
    answer:2,
  },
  {
    q:'53. In which one of the following pairings of effluent parameters are non-negotiable?',
    options: ['Temperature and suspended solids','pH and temperature','pH and COD (Chemical Oxygen Demand)','Suspended solids and BOD (Biological Oxygen Demand)'],
    answer:1,
  },
  {
    q:'Which of the following conditions are suitable for caustic cleaning?',
    options: ['cleaning aluminium kegs or casks','cleaning under an atmosphere of carbon dioxide ','for descaling lines and vessels','removal of heavy organic soil'],
    answer:3,
  },
  {
    q:'High gravity brewing is when',
    options: ['Beer is packaged at higher alcoholic strength','The wort is boiled for a long time','Beer is diluted post filtration','When producing low carbohydrate beer'],
    answer:2,
  },
  {
    q:'The maximum safe concentration of atmospheric carbon dioxide is:',
    options: ['50 ppm (0.005%) by volume','500 ppm (0.05%) by volume','5,000 ppm (0.5%) by volume','50,000 ppm (5.0%) by volume'],
    answer:2,
  },
  {
    q:'57. What is meant by the “carbon cycle”?',
    options: ['Describes how carbon is released and then recaptured by plants and algae','It is a way or reducing carbon emissions by carbon dioxide capture','Policy to move away from fossil fuels to use clean renewable technologies ','Recycling as much product within the brewery and tanking off other solids to reduce effluent'],
    answer:0,
  },
  {
    q:'Which of the following sources of effluent is likely to have the highest level of organic effluent?',
    options: ['Dropping detergent tanks','Sludge form external keg washer','Final rinse water','Cellar tank bottoms'],
    answer:3,
  },
  {
    q:'Which of the following procedures is wasteful of process water?',
    options: ['not repairing condensate main leaks','uncontrolled use of wash down hoses','excessive use of chase water at product changeovers','excessive vessel rinsing during CIP'],
    answer:3,
  },
  {
    q:'EMS - Environmental Management System is',
    options: ['Is a procedure for a company to evaluate and reduce its environmental impact','Is a regulatory system which sets limits and targets for environmental performance','Is part of the purchasing process to ensure a company only buys “green” products','Is an environmental way of working where all activities are conducted in a “green” way'],
    answer:3,
  },
  {
    q:'The delicate flavour of lager comes principally from the use of',
    options: ['Hops which are grown at relatively high altitudes in Europe','Yeast which flocculates early',' Malt which is relatively under modified and under kilned','Water which is free of organic material '],
    answer:2,
  },
  {
    q:'The most important purpose of a glass beer bottle is to',
    options: ['Provide and attractive product to tempt the consumer','Protect the quality of beer during its shelf life ','Use a container which is easily recycled','Prevent sun struck flavours by tinting the glass'],
    answer:1,
  },
  {
    q:'which one of the statements about bright beer handling is NOT true?',
    options: ['It is possible to freeze beer during trim chilling','CO2 remains in solution as the temperature rises during beer transfer','Foaming can cause haze','Beer that has foamed will have a lower head stability after packaging'],
    answer:1,
  },
  {
    q:'Calculate the final bitterness (IBU) when beer tank A & B are blended together using the data below. Tank A 100 hl at 30 IBU and Tank B 40 hl at 23 IBU',
    options: ['25 IBU','26 IBU','27 IBU','28 IBU'],
    answer:3,
  },
  {
    q:'Which of the two following reasons is it important to measure beer pH?',
    options: ['A&B','C&D','A&C','B&D','B&C'],
    answer:3,
    img:'img/bd1.jpg'
  },
  {
    q:'Which constituent in often present in lager is responsible for the flavour describe as cooked veg, sweetcorn or tomato?',
    options: ['Dimethyl sulphide','Trans-2-nonenal','Lactic acid','Ethyl acetate'],
    answer:0,
  },
  {
    q:'which two of the following are features of the triangular (three glass) taste test?',
    options: ['A&B','C&D','A&C','B&D','B&C'],
    answer:3,
    img:'img/bd2.jpg'
  },
  {
    q:'which two of the following options can assist in the control of dissolved oxygen in beer?',
    options: ['A&C','B&C','D&E','A&F','A&E','C&D'],
    answer:2,
    img:'img/de1.jpg'
  },
  {
    q:'A sampling schedule is a plan',
    options: ['Specifying where, when and how frequently samples of the product in process and at the end of the process are taken','Specifying the number of samples that should be taken annually','Specifying which operators should take the samples','Specifying which equipment should be used to analyse the samples'],
    answer:0,
  },
  {
    q:'Flavour profiles of beers are typically displayed pictorially using:',
    options: ['flow charts','pie charts','x, y graphs','spider diagrams'],
    answer:3,
  },
  {
    q:'Which list below contains the four correct basic flavours?',
    options: ['sweet, salty, hoppy and malty','sweet, salty, sour, bitter','sweet, salty, bitter and fruity','sweet, salty, fruity and hoppy'],
    answer:1,
  },
  {
    q:'which of the following tasks are the responsibility of a quality systems manager?',
    options: ['A,B&D','B,C&F','A,D&F','E,D&F','B,C&D','C,D&E'],
    answer:5,
    img:'img/cde.jpg'
  },
  {
    q:'When treated with the dye, crystal violet gram-positive bacteria appear:',
    options: ['blue/black under a microscope','Violet / purple under a microscope','colourless under a microscope','orange under a microscope'],
    answer:1,
  },
  {
    q:'Obesumbacterium converts sugar to ',
    options: ['Diacetyl and dimethylsulphide','Alcohol and carbon dioxide','Lactic acid ','Acetaldehyde and hydrogen sulphide'],
    answer:0,
  },
  {
    q:'The aim of quality assurance is to:',
    options: ['determine where workers have made mistakes during production','find faults with the beer','assure the quality of product and package reaching the point of consumer consumption meets agreed company specifications','test the suppliers` ability to provide raw materials that are consistently in specification'],
    answer:2,
  },
  {
    q:'A Quality Assurance System ensures that:',
    options: ['out-of-spec. product is labelled as such prior to release to trade','employee absenteeism is posted on notice boards','visitors to the brewery are impressed when they visit','current practice is compared with official procedures'],
    answer:3,
  },
  {
    q:'Which of the following best describes sterilisation?',
    options: ['To reduce the number of bacteria present by 99.9% but not viruses and fungi','To destroy most pathogenic micro-organisms but not usually bacterial spores','To kill all forms of life including transmissible agents such as fungi, bacteria and spores ','To remove visible debris, dirt and dust'],
    answer:2,
  },
  {
    q:'Which of the following cleaning agents is the best one to remove organic soil?',
    options: ['Caustic soda','Acid detergent','Steam','Dilute hydrogen peroxide solution'],
    answer:0,
  },
  {
    q:'During CIP, what sort of flow is the best for cleaning pipework?',
    options: ['Laminar flow < 1.5m/s','Fast flow > 2.5m/s','Turbulent flow > 1.5m/s','Smooth flow >1.0 m/s and <1.5 m/s'],
    answer:2,
  },
  {
    q:'Which of the following is correct? The FOUR factors that affect cleaning the inside of a vessel:',
    options: ['A','B','C','D'],
    answer:0,
    img:'img/a1.jpg'
  },
  {
    q:'Which of the following best describes the disadvantages of breakdown monitoring?',
    options: ['A','B','C','D'],
    answer:3,
    img:'img/d2.jpg'
  },
  {
    q:'What is the purpose of a post-sterilant rinse?',
    options: ['To remove traces of detergent','To remove traces of sterilant if there is a possibility of tainting','To remove traces of rinsing agent and ensure sterilisation','To leave a fine layer of sterilant on the surface of the vessel in order to ensure sterilisation'],
    answer:1,
  }



]




