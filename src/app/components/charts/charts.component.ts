import { Component, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from '../../services/services/data.service';

@Component({
  selector: 'app-charts',
  standalone: true,
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements AfterViewInit {
  testChart: Highcharts.Chart | undefined;
  lineChart: Highcharts.Chart | undefined;

  constructor(private dataService: DataService) {}

  ngAfterViewInit() {
    this.dataService.getDataLength().subscribe((data) => {
      console.log(data);
      // Create Pie Chart
      this.testChart = Highcharts.chart('chartContainer', {
        chart: {
          backgroundColor: "#101a34fd",
          type: 'pie',
          borderColor: 'white',
          borderWidth: 5,
          colorCount: 5,
          style: {
            color: 'white'
          }
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: true,
              style: {
                color: 'white',
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
            { name: 'freelance', y: data.freelancers, color: '#EDAA25' },
            {name:'service', y: data.services, color: '#F87171'},
            {name:'subCategory', y: data.subCategories, color: '#0A7373'},
            { name: 'user', y: data.users, color: '#065F46' },
            { name: 'course', y: data.courses, color: '#C43302' },
            { name: 'order', y: data.clients, color: '#B7BF99' }
          ],
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

      // Create Line Chart
      this.lineChart = Highcharts.chart('lineChartContainer', {
        chart: {
          type: 'spline',
          scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
          },
          backgroundColor: "#101a34fd",
          borderColor: 'white',
          borderWidth: 5,
          colorCount: 5,
          style: {
            color: 'white'
          }
        },
        title: {
          text: 'Course VS Services VS Categories',
          align: 'center',
          style: {
            color: 'white'
          }
        },
        xAxis: {
          title: {
            text: 'Services',
            style: {
              color: 'white'
            }
          },
          labels: {
            style: {
              color: 'white' // Set custom color for x-axis labels
            }
          }
        },
        yAxis: {
          title: {
            text: 'Courses',
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
        series: [{
          name: 'Courses',
          type: 'line',
          data: [1, 2, 10, 15, 25, 30, 40, data.courses],
          color: 'gold'
        }, {
          name: 'Services',
          type: 'line',
          data: [1, 2, 5, 9, 10, 12, data.services,5],
          color: 'green'
        },{
          name: 'Categories',
          type: 'line',
          data: [1, 2, 3,4,5, data.categories,5],
          color: 'white'
        }]
      });
    });
  }
}
