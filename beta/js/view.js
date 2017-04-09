/*jshint esversion:6*/
var view = (function () {
    "use strict";
    var view = {};

    window.onload = function () {
       //todo
    };

    document.getElementById('git').onclick = function () {
        location.href = 'https://github.com/persa188';
    };

    document.getElementById('bio').onclick = function () {
        var modal = document.getElementById('myModal');
        modal.style.display = 'block';
    };

    document.getElementById('close-modal').onclick = function () {
        var modal = document.getElementById('myModal');
        modal.style.display = 'none';
    };

    document.getElementById('src').onclick = function () {
        location.href = 'https://github.com/persa188/persa188.github.io';
    }

    return view;
}(window));
