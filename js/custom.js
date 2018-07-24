//sidenav 
var sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});


//slider 
var slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

// AutoComplete

var ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Mwanza": null,
        "Dar Es Salaam": null,
        "Bagamoyo": null,
        "Isimila, Iringa": null,
        "Bwawa la Mungu": null,
        "Arusha": null,
        "Kilimanjaro": null,
        "Mbeya": null,
        "Moshi": null,
        "Mtwara": null,
        "Manyara": null
    }
});

// Material Boxed
var mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

//Scrollspy
var scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {});