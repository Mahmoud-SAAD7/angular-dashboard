import { Component, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  standalone: true,
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements AfterViewInit {
  testChart: Highcharts.Chart | undefined;
  lineChart: Highcharts.Chart | undefined;

  constructor() {}

  ngAfterViewInit() {
    // Pie Chart
    this.testChart = Highcharts.chart('chartContainer', {
      chart:{
        backgroundColor:"#101a34fd",
        type: 'pie',
        borderColor:'green',
        borderWidth:5,
        colorCount: 5,
        style: {
          color: 'white'
        }
      },
      plotOptions:{
        pie:{
          innerSize:"100%",
          dataLabels:{
            enabled:true,
            style: {
              color: 'white', // Set custom color for data labels in pie chart
              fontSize: '20px'
            }
          }
        }
      },
      title: {
        text: 'Highcharts Pie Chart',
        style: {
          color: 'white'
        }
      },
      series: [{
        type: 'pie',
        data: [
          { name: 'freelance', y: 1, color: '#BE123C' },
          { name: 'admin', y: 2, color: '#0EA5E9' },
          { name: 'user', y: 3, color: '#065F46' },
          { name: 'course', y: 4, color: '#FDE047' },
          { name: 'order', y: 5, color: '#94A3B8' }
        ],
        innerSize: '50%',
      }],
      xAxis: {
        labels: {
          style: {
            color: 'white' // Set custom color for x-axis labels
          }
        }
      },
      yAxis: {
        labels: {
          style: {
            color: 'white' // Set custom color for y-axis labels
          }
        }
      }
    });

    // Line Chart
    this.lineChart = Highcharts.chart('lineChartContainer', {
      chart:{
        backgroundColor:"#101a34fd",
        type: 'line',
        borderColor:'green',
        borderWidth:5,
        colorCount: 5,
        style: {
          color: 'white'
        }
      },
      plotOptions:{
        line:{
          dataLabels:{
            enabled:true,
            style: {
              color: 'white', // Set custom color for data labels in line chart
              fontSize: '20px'
            }
          }
        }
      },
      yAxis:{
        title: {
          text: 'Y Axis Title',
          style: {
            color: 'white'
          }
        },
        labels: {
          style: {
            color: 'white' // Set custom color for y-axis labels
          }
        }
      },
      title: {
        text: 'Highcharts Line Chart',
        style: {
          color: 'white'
        }
      },
      series: [{
        type: 'line',
        data: [1, 2, 3, 4, 5],
        color: 'white'
      }],
      xAxis: {
        labels: {
          style: {
            color: 'white' // Set custom color for x-axis labels
          }
        }
      }
    });
  }
}
