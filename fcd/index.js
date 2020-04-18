window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-136606924-1');

const date = new Date().getFullYear();

// external js: isotope.pkgd.js

$(document).ready( function() {
  
  const fullCharList = document.querySelectorAll(".chara");
  var charList = Object.values(fullCharList);
  
  charList.forEach(char => {
    if (char.dataset.birth) {
      const age = date-char.dataset.birth
      switch (true) {
        case (age <= 12):
            char.classList.add('0');
            break;
        case (age >= 13 && age <= 17):
            char.classList.add('13');
            break;
        case (age >= 18 && age <= 25):
            char.classList.add('18');
            break;
        case (age >= 26 && age <= 30):
            char.classList.add('26');
            break;
        case (age >= 31 && age <= 39):
            char.classList.add('31');
            break;
        case (age >= 40 && age <= 49):
            char.classList.add('40');
            break;
        case (age >= 50 && age <= 64):
            char.classList.add('50');
            break;
        case (age >= 65):
            char.classList.add('65');
            break;
        default:
            break;
      }
    }
  }
 );
  
  // init Isotope
  var $grid = $('.wrapper').isotope({
    itemSelector: '.chara'
  });

  // store filter for each group
  var filters = {};

  $('.filters').on( 'click', '.button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = concatValues( filters );
    // set filter for Isotope
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.ischecked').removeClass('ischecked');
      $( this ).addClass('ischecked');
    });
  });
  
});

$('button').on('click',function(){
    $('button').removeClass('active');
    $(this).addClass('active')
})

// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}     
