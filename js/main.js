$(function () {
  $(window).on('scroll.progress', function () {
    var scrollTop = $(this).scrollTop()

    if (scrollTop > 2000 /* Нужное значение на странице */) {
      jQuery(document).ready(function ($) {
        if ($('#canvas').length) {
          var doughnutData = [
            {
              value: 90,
              color: '#4d4d4d',
            },
            {
              value: 10,
              color: '#ecf0f1',
            },
          ]
          var myDoughnut = new Chart(
            document.getElementById('canvas').getContext('2d')
          ).Doughnut(doughnutData)
        }

        if ($('#canvas2').length) {
          var doughnutData = [
            {
              value: 85,
              color: '#4d4d4d',
            },
            {
              value: 15,
              color: '#ecf0f1',
            },
          ]

          var myDoughnut = new Chart(
            document.getElementById('canvas2').getContext('2d')
          ).Doughnut(doughnutData)
        }

        if ($('#canvas3').length) {
          var doughnutData = [
            {
              value: 97,
              color: '#4d4d4d',
            },
            {
              value: 3,
              color: '#ecf0f1',
            },
          ]
          var myDoughnut = new Chart(
            document.getElementById('canvas3').getContext('2d')
          ).Doughnut(doughnutData)
        }

        if ($('#canvas4').length) {
          var doughnutData = [
            {
              value: 80,
              color: '#4d4d4d',
            },
            {
              value: 20,
              color: '#ecf0f1',
            },
          ]
          var myDoughnut = new Chart(
            document.getElementById('canvas4').getContext('2d')
          ).Doughnut(doughnutData)
        }
      })

      $(window).off('scroll.progress')
    }
  })
})
