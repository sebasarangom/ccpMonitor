/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2023.0, "minX": 0.0, "maxY": 2156.0, "series": [{"data": [[0.0, 2023.0], [0.1, 2023.0], [0.2, 2023.0], [0.3, 2023.0], [0.4, 2024.0], [0.5, 2025.0], [0.6, 2026.0], [0.7, 2026.0], [0.8, 2026.0], [0.9, 2027.0], [1.0, 2027.0], [1.1, 2027.0], [1.2, 2027.0], [1.3, 2028.0], [1.4, 2028.0], [1.5, 2028.0], [1.6, 2028.0], [1.7, 2028.0], [1.8, 2028.0], [1.9, 2029.0], [2.0, 2029.0], [2.1, 2029.0], [2.2, 2030.0], [2.3, 2030.0], [2.4, 2030.0], [2.5, 2030.0], [2.6, 2031.0], [2.7, 2031.0], [2.8, 2032.0], [2.9, 2032.0], [3.0, 2032.0], [3.1, 2032.0], [3.2, 2032.0], [3.3, 2032.0], [3.4, 2033.0], [3.5, 2033.0], [3.6, 2033.0], [3.7, 2033.0], [3.8, 2033.0], [3.9, 2033.0], [4.0, 2033.0], [4.1, 2034.0], [4.2, 2034.0], [4.3, 2034.0], [4.4, 2034.0], [4.5, 2034.0], [4.6, 2034.0], [4.7, 2034.0], [4.8, 2034.0], [4.9, 2034.0], [5.0, 2034.0], [5.1, 2035.0], [5.2, 2035.0], [5.3, 2035.0], [5.4, 2035.0], [5.5, 2035.0], [5.6, 2035.0], [5.7, 2035.0], [5.8, 2036.0], [5.9, 2036.0], [6.0, 2036.0], [6.1, 2036.0], [6.2, 2036.0], [6.3, 2036.0], [6.4, 2036.0], [6.5, 2036.0], [6.6, 2036.0], [6.7, 2037.0], [6.8, 2037.0], [6.9, 2037.0], [7.0, 2037.0], [7.1, 2037.0], [7.2, 2037.0], [7.3, 2037.0], [7.4, 2037.0], [7.5, 2037.0], [7.6, 2037.0], [7.7, 2038.0], [7.8, 2038.0], [7.9, 2038.0], [8.0, 2038.0], [8.1, 2038.0], [8.2, 2038.0], [8.3, 2038.0], [8.4, 2038.0], [8.5, 2038.0], [8.6, 2038.0], [8.7, 2038.0], [8.8, 2038.0], [8.9, 2038.0], [9.0, 2039.0], [9.1, 2039.0], [9.2, 2039.0], [9.3, 2039.0], [9.4, 2039.0], [9.5, 2039.0], [9.6, 2039.0], [9.7, 2039.0], [9.8, 2039.0], [9.9, 2039.0], [10.0, 2039.0], [10.1, 2039.0], [10.2, 2040.0], [10.3, 2040.0], [10.4, 2040.0], [10.5, 2040.0], [10.6, 2040.0], [10.7, 2040.0], [10.8, 2040.0], [10.9, 2040.0], [11.0, 2040.0], [11.1, 2040.0], [11.2, 2041.0], [11.3, 2041.0], [11.4, 2041.0], [11.5, 2041.0], [11.6, 2041.0], [11.7, 2041.0], [11.8, 2041.0], [11.9, 2041.0], [12.0, 2041.0], [12.1, 2041.0], [12.2, 2041.0], [12.3, 2041.0], [12.4, 2041.0], [12.5, 2041.0], [12.6, 2042.0], [12.7, 2042.0], [12.8, 2042.0], [12.9, 2042.0], [13.0, 2042.0], [13.1, 2042.0], [13.2, 2042.0], [13.3, 2042.0], [13.4, 2042.0], [13.5, 2042.0], [13.6, 2042.0], [13.7, 2042.0], [13.8, 2042.0], [13.9, 2042.0], [14.0, 2043.0], [14.1, 2043.0], [14.2, 2043.0], [14.3, 2043.0], [14.4, 2043.0], [14.5, 2043.0], [14.6, 2043.0], [14.7, 2043.0], [14.8, 2043.0], [14.9, 2043.0], [15.0, 2043.0], [15.1, 2043.0], [15.2, 2043.0], [15.3, 2043.0], [15.4, 2043.0], [15.5, 2043.0], [15.6, 2043.0], [15.7, 2043.0], [15.8, 2044.0], [15.9, 2044.0], [16.0, 2044.0], [16.1, 2044.0], [16.2, 2044.0], [16.3, 2044.0], [16.4, 2044.0], [16.5, 2044.0], [16.6, 2044.0], [16.7, 2044.0], [16.8, 2044.0], [16.9, 2044.0], [17.0, 2044.0], [17.1, 2044.0], [17.2, 2044.0], [17.3, 2044.0], [17.4, 2044.0], [17.5, 2045.0], [17.6, 2045.0], [17.7, 2045.0], [17.8, 2045.0], [17.9, 2045.0], [18.0, 2045.0], [18.1, 2045.0], [18.2, 2045.0], [18.3, 2045.0], [18.4, 2045.0], [18.5, 2045.0], [18.6, 2045.0], [18.7, 2045.0], [18.8, 2045.0], [18.9, 2045.0], [19.0, 2045.0], [19.1, 2045.0], [19.2, 2045.0], [19.3, 2045.0], [19.4, 2045.0], [19.5, 2045.0], [19.6, 2045.0], [19.7, 2045.0], [19.8, 2045.0], [19.9, 2045.0], [20.0, 2045.0], [20.1, 2046.0], [20.2, 2046.0], [20.3, 2046.0], [20.4, 2046.0], [20.5, 2046.0], [20.6, 2046.0], [20.7, 2046.0], [20.8, 2046.0], [20.9, 2046.0], [21.0, 2046.0], [21.1, 2046.0], [21.2, 2046.0], [21.3, 2046.0], [21.4, 2046.0], [21.5, 2046.0], [21.6, 2046.0], [21.7, 2046.0], [21.8, 2046.0], [21.9, 2046.0], [22.0, 2046.0], [22.1, 2046.0], [22.2, 2046.0], [22.3, 2046.0], [22.4, 2046.0], [22.5, 2046.0], [22.6, 2046.0], [22.7, 2046.0], [22.8, 2046.0], [22.9, 2046.0], [23.0, 2047.0], [23.1, 2047.0], [23.2, 2047.0], [23.3, 2047.0], [23.4, 2047.0], [23.5, 2047.0], [23.6, 2047.0], [23.7, 2047.0], [23.8, 2047.0], [23.9, 2047.0], [24.0, 2047.0], [24.1, 2047.0], [24.2, 2047.0], [24.3, 2047.0], [24.4, 2047.0], [24.5, 2047.0], [24.6, 2047.0], [24.7, 2047.0], [24.8, 2047.0], [24.9, 2047.0], [25.0, 2047.0], [25.1, 2047.0], [25.2, 2047.0], [25.3, 2047.0], [25.4, 2047.0], [25.5, 2047.0], [25.6, 2048.0], [25.7, 2048.0], [25.8, 2048.0], [25.9, 2048.0], [26.0, 2048.0], [26.1, 2048.0], [26.2, 2048.0], [26.3, 2048.0], [26.4, 2048.0], [26.5, 2048.0], [26.6, 2048.0], [26.7, 2048.0], [26.8, 2048.0], [26.9, 2048.0], [27.0, 2048.0], [27.1, 2048.0], [27.2, 2048.0], [27.3, 2048.0], [27.4, 2048.0], [27.5, 2048.0], [27.6, 2048.0], [27.7, 2048.0], [27.8, 2048.0], [27.9, 2048.0], [28.0, 2048.0], [28.1, 2048.0], [28.2, 2048.0], [28.3, 2048.0], [28.4, 2048.0], [28.5, 2048.0], [28.6, 2049.0], [28.7, 2049.0], [28.8, 2049.0], [28.9, 2049.0], [29.0, 2049.0], [29.1, 2049.0], [29.2, 2049.0], [29.3, 2049.0], [29.4, 2049.0], [29.5, 2049.0], [29.6, 2049.0], [29.7, 2049.0], [29.8, 2049.0], [29.9, 2049.0], [30.0, 2049.0], [30.1, 2049.0], [30.2, 2049.0], [30.3, 2049.0], [30.4, 2049.0], [30.5, 2049.0], [30.6, 2049.0], [30.7, 2049.0], [30.8, 2049.0], [30.9, 2049.0], [31.0, 2049.0], [31.1, 2049.0], [31.2, 2049.0], [31.3, 2049.0], [31.4, 2049.0], [31.5, 2050.0], [31.6, 2050.0], [31.7, 2050.0], [31.8, 2050.0], [31.9, 2050.0], [32.0, 2050.0], [32.1, 2050.0], [32.2, 2050.0], [32.3, 2050.0], [32.4, 2050.0], [32.5, 2050.0], [32.6, 2050.0], [32.7, 2050.0], [32.8, 2050.0], [32.9, 2050.0], [33.0, 2050.0], [33.1, 2050.0], [33.2, 2050.0], [33.3, 2050.0], [33.4, 2050.0], [33.5, 2050.0], [33.6, 2050.0], [33.7, 2050.0], [33.8, 2050.0], [33.9, 2050.0], [34.0, 2050.0], [34.1, 2050.0], [34.2, 2050.0], [34.3, 2050.0], [34.4, 2051.0], [34.5, 2051.0], [34.6, 2051.0], [34.7, 2051.0], [34.8, 2051.0], [34.9, 2051.0], [35.0, 2051.0], [35.1, 2051.0], [35.2, 2051.0], [35.3, 2051.0], [35.4, 2051.0], [35.5, 2051.0], [35.6, 2051.0], [35.7, 2051.0], [35.8, 2051.0], [35.9, 2051.0], [36.0, 2051.0], [36.1, 2051.0], [36.2, 2051.0], [36.3, 2051.0], [36.4, 2051.0], [36.5, 2051.0], [36.6, 2051.0], [36.7, 2051.0], [36.8, 2051.0], [36.9, 2051.0], [37.0, 2051.0], [37.1, 2052.0], [37.2, 2052.0], [37.3, 2052.0], [37.4, 2052.0], [37.5, 2052.0], [37.6, 2052.0], [37.7, 2052.0], [37.8, 2052.0], [37.9, 2052.0], [38.0, 2052.0], [38.1, 2052.0], [38.2, 2052.0], [38.3, 2052.0], [38.4, 2052.0], [38.5, 2052.0], [38.6, 2052.0], [38.7, 2052.0], [38.8, 2052.0], [38.9, 2052.0], [39.0, 2052.0], [39.1, 2052.0], [39.2, 2052.0], [39.3, 2052.0], [39.4, 2052.0], [39.5, 2052.0], [39.6, 2052.0], [39.7, 2052.0], [39.8, 2052.0], [39.9, 2052.0], [40.0, 2052.0], [40.1, 2052.0], [40.2, 2053.0], [40.3, 2053.0], [40.4, 2053.0], [40.5, 2053.0], [40.6, 2053.0], [40.7, 2053.0], [40.8, 2053.0], [40.9, 2053.0], [41.0, 2053.0], [41.1, 2053.0], [41.2, 2053.0], [41.3, 2053.0], [41.4, 2053.0], [41.5, 2053.0], [41.6, 2053.0], [41.7, 2053.0], [41.8, 2053.0], [41.9, 2053.0], [42.0, 2053.0], [42.1, 2053.0], [42.2, 2053.0], [42.3, 2053.0], [42.4, 2053.0], [42.5, 2053.0], [42.6, 2054.0], [42.7, 2054.0], [42.8, 2054.0], [42.9, 2054.0], [43.0, 2054.0], [43.1, 2054.0], [43.2, 2054.0], [43.3, 2054.0], [43.4, 2054.0], [43.5, 2054.0], [43.6, 2054.0], [43.7, 2054.0], [43.8, 2054.0], [43.9, 2054.0], [44.0, 2054.0], [44.1, 2054.0], [44.2, 2054.0], [44.3, 2054.0], [44.4, 2054.0], [44.5, 2054.0], [44.6, 2054.0], [44.7, 2054.0], [44.8, 2054.0], [44.9, 2054.0], [45.0, 2054.0], [45.1, 2054.0], [45.2, 2054.0], [45.3, 2054.0], [45.4, 2054.0], [45.5, 2054.0], [45.6, 2054.0], [45.7, 2054.0], [45.8, 2054.0], [45.9, 2054.0], [46.0, 2054.0], [46.1, 2054.0], [46.2, 2055.0], [46.3, 2055.0], [46.4, 2055.0], [46.5, 2055.0], [46.6, 2055.0], [46.7, 2055.0], [46.8, 2055.0], [46.9, 2055.0], [47.0, 2055.0], [47.1, 2055.0], [47.2, 2055.0], [47.3, 2055.0], [47.4, 2055.0], [47.5, 2055.0], [47.6, 2055.0], [47.7, 2055.0], [47.8, 2055.0], [47.9, 2055.0], [48.0, 2055.0], [48.1, 2055.0], [48.2, 2055.0], [48.3, 2055.0], [48.4, 2055.0], [48.5, 2055.0], [48.6, 2055.0], [48.7, 2055.0], [48.8, 2055.0], [48.9, 2055.0], [49.0, 2055.0], [49.1, 2055.0], [49.2, 2055.0], [49.3, 2055.0], [49.4, 2055.0], [49.5, 2055.0], [49.6, 2056.0], [49.7, 2056.0], [49.8, 2056.0], [49.9, 2056.0], [50.0, 2056.0], [50.1, 2056.0], [50.2, 2056.0], [50.3, 2056.0], [50.4, 2056.0], [50.5, 2056.0], [50.6, 2056.0], [50.7, 2056.0], [50.8, 2056.0], [50.9, 2056.0], [51.0, 2056.0], [51.1, 2056.0], [51.2, 2056.0], [51.3, 2056.0], [51.4, 2056.0], [51.5, 2056.0], [51.6, 2056.0], [51.7, 2056.0], [51.8, 2056.0], [51.9, 2056.0], [52.0, 2056.0], [52.1, 2056.0], [52.2, 2056.0], [52.3, 2056.0], [52.4, 2056.0], [52.5, 2056.0], [52.6, 2056.0], [52.7, 2056.0], [52.8, 2056.0], [52.9, 2057.0], [53.0, 2057.0], [53.1, 2057.0], [53.2, 2057.0], [53.3, 2057.0], [53.4, 2057.0], [53.5, 2057.0], [53.6, 2057.0], [53.7, 2057.0], [53.8, 2057.0], [53.9, 2057.0], [54.0, 2057.0], [54.1, 2057.0], [54.2, 2057.0], [54.3, 2057.0], [54.4, 2057.0], [54.5, 2057.0], [54.6, 2057.0], [54.7, 2057.0], [54.8, 2057.0], [54.9, 2057.0], [55.0, 2057.0], [55.1, 2057.0], [55.2, 2057.0], [55.3, 2057.0], [55.4, 2057.0], [55.5, 2057.0], [55.6, 2057.0], [55.7, 2057.0], [55.8, 2057.0], [55.9, 2057.0], [56.0, 2057.0], [56.1, 2058.0], [56.2, 2058.0], [56.3, 2058.0], [56.4, 2058.0], [56.5, 2058.0], [56.6, 2058.0], [56.7, 2058.0], [56.8, 2058.0], [56.9, 2058.0], [57.0, 2058.0], [57.1, 2058.0], [57.2, 2058.0], [57.3, 2058.0], [57.4, 2058.0], [57.5, 2058.0], [57.6, 2058.0], [57.7, 2058.0], [57.8, 2058.0], [57.9, 2058.0], [58.0, 2058.0], [58.1, 2058.0], [58.2, 2058.0], [58.3, 2058.0], [58.4, 2059.0], [58.5, 2059.0], [58.6, 2059.0], [58.7, 2059.0], [58.8, 2059.0], [58.9, 2059.0], [59.0, 2059.0], [59.1, 2059.0], [59.2, 2059.0], [59.3, 2059.0], [59.4, 2059.0], [59.5, 2059.0], [59.6, 2059.0], [59.7, 2059.0], [59.8, 2059.0], [59.9, 2059.0], [60.0, 2059.0], [60.1, 2059.0], [60.2, 2059.0], [60.3, 2059.0], [60.4, 2059.0], [60.5, 2059.0], [60.6, 2059.0], [60.7, 2059.0], [60.8, 2059.0], [60.9, 2059.0], [61.0, 2059.0], [61.1, 2059.0], [61.2, 2060.0], [61.3, 2060.0], [61.4, 2060.0], [61.5, 2060.0], [61.6, 2060.0], [61.7, 2060.0], [61.8, 2060.0], [61.9, 2060.0], [62.0, 2060.0], [62.1, 2060.0], [62.2, 2060.0], [62.3, 2060.0], [62.4, 2060.0], [62.5, 2060.0], [62.6, 2060.0], [62.7, 2060.0], [62.8, 2060.0], [62.9, 2060.0], [63.0, 2060.0], [63.1, 2060.0], [63.2, 2060.0], [63.3, 2060.0], [63.4, 2060.0], [63.5, 2060.0], [63.6, 2060.0], [63.7, 2060.0], [63.8, 2060.0], [63.9, 2060.0], [64.0, 2061.0], [64.1, 2061.0], [64.2, 2061.0], [64.3, 2061.0], [64.4, 2061.0], [64.5, 2061.0], [64.6, 2061.0], [64.7, 2061.0], [64.8, 2061.0], [64.9, 2061.0], [65.0, 2061.0], [65.1, 2061.0], [65.2, 2061.0], [65.3, 2061.0], [65.4, 2061.0], [65.5, 2061.0], [65.6, 2061.0], [65.7, 2061.0], [65.8, 2061.0], [65.9, 2061.0], [66.0, 2061.0], [66.1, 2061.0], [66.2, 2061.0], [66.3, 2061.0], [66.4, 2061.0], [66.5, 2062.0], [66.6, 2062.0], [66.7, 2062.0], [66.8, 2062.0], [66.9, 2062.0], [67.0, 2062.0], [67.1, 2062.0], [67.2, 2062.0], [67.3, 2062.0], [67.4, 2062.0], [67.5, 2062.0], [67.6, 2062.0], [67.7, 2062.0], [67.8, 2062.0], [67.9, 2062.0], [68.0, 2062.0], [68.1, 2062.0], [68.2, 2062.0], [68.3, 2062.0], [68.4, 2062.0], [68.5, 2062.0], [68.6, 2062.0], [68.7, 2062.0], [68.8, 2062.0], [68.9, 2062.0], [69.0, 2063.0], [69.1, 2063.0], [69.2, 2063.0], [69.3, 2063.0], [69.4, 2063.0], [69.5, 2063.0], [69.6, 2063.0], [69.7, 2063.0], [69.8, 2063.0], [69.9, 2063.0], [70.0, 2063.0], [70.1, 2063.0], [70.2, 2063.0], [70.3, 2063.0], [70.4, 2063.0], [70.5, 2063.0], [70.6, 2063.0], [70.7, 2063.0], [70.8, 2063.0], [70.9, 2063.0], [71.0, 2063.0], [71.1, 2063.0], [71.2, 2063.0], [71.3, 2063.0], [71.4, 2064.0], [71.5, 2064.0], [71.6, 2064.0], [71.7, 2064.0], [71.8, 2064.0], [71.9, 2064.0], [72.0, 2064.0], [72.1, 2064.0], [72.2, 2064.0], [72.3, 2064.0], [72.4, 2064.0], [72.5, 2064.0], [72.6, 2064.0], [72.7, 2064.0], [72.8, 2064.0], [72.9, 2064.0], [73.0, 2064.0], [73.1, 2064.0], [73.2, 2064.0], [73.3, 2064.0], [73.4, 2065.0], [73.5, 2065.0], [73.6, 2065.0], [73.7, 2065.0], [73.8, 2065.0], [73.9, 2065.0], [74.0, 2065.0], [74.1, 2065.0], [74.2, 2065.0], [74.3, 2065.0], [74.4, 2065.0], [74.5, 2065.0], [74.6, 2065.0], [74.7, 2065.0], [74.8, 2065.0], [74.9, 2065.0], [75.0, 2065.0], [75.1, 2065.0], [75.2, 2065.0], [75.3, 2065.0], [75.4, 2065.0], [75.5, 2065.0], [75.6, 2065.0], [75.7, 2066.0], [75.8, 2066.0], [75.9, 2066.0], [76.0, 2066.0], [76.1, 2066.0], [76.2, 2066.0], [76.3, 2066.0], [76.4, 2066.0], [76.5, 2066.0], [76.6, 2066.0], [76.7, 2066.0], [76.8, 2066.0], [76.9, 2066.0], [77.0, 2066.0], [77.1, 2066.0], [77.2, 2066.0], [77.3, 2066.0], [77.4, 2066.0], [77.5, 2066.0], [77.6, 2066.0], [77.7, 2066.0], [77.8, 2066.0], [77.9, 2066.0], [78.0, 2066.0], [78.1, 2066.0], [78.2, 2067.0], [78.3, 2067.0], [78.4, 2067.0], [78.5, 2067.0], [78.6, 2067.0], [78.7, 2067.0], [78.8, 2067.0], [78.9, 2067.0], [79.0, 2067.0], [79.1, 2067.0], [79.2, 2067.0], [79.3, 2067.0], [79.4, 2067.0], [79.5, 2068.0], [79.6, 2068.0], [79.7, 2068.0], [79.8, 2068.0], [79.9, 2068.0], [80.0, 2068.0], [80.1, 2068.0], [80.2, 2068.0], [80.3, 2068.0], [80.4, 2068.0], [80.5, 2068.0], [80.6, 2069.0], [80.7, 2069.0], [80.8, 2069.0], [80.9, 2069.0], [81.0, 2069.0], [81.1, 2069.0], [81.2, 2069.0], [81.3, 2069.0], [81.4, 2069.0], [81.5, 2069.0], [81.6, 2069.0], [81.7, 2069.0], [81.8, 2069.0], [81.9, 2069.0], [82.0, 2069.0], [82.1, 2069.0], [82.2, 2069.0], [82.3, 2069.0], [82.4, 2069.0], [82.5, 2070.0], [82.6, 2070.0], [82.7, 2070.0], [82.8, 2070.0], [82.9, 2070.0], [83.0, 2070.0], [83.1, 2070.0], [83.2, 2070.0], [83.3, 2070.0], [83.4, 2070.0], [83.5, 2070.0], [83.6, 2070.0], [83.7, 2070.0], [83.8, 2070.0], [83.9, 2070.0], [84.0, 2070.0], [84.1, 2071.0], [84.2, 2071.0], [84.3, 2071.0], [84.4, 2071.0], [84.5, 2071.0], [84.6, 2071.0], [84.7, 2071.0], [84.8, 2071.0], [84.9, 2071.0], [85.0, 2072.0], [85.1, 2072.0], [85.2, 2072.0], [85.3, 2072.0], [85.4, 2072.0], [85.5, 2072.0], [85.6, 2072.0], [85.7, 2072.0], [85.8, 2072.0], [85.9, 2072.0], [86.0, 2072.0], [86.1, 2072.0], [86.2, 2072.0], [86.3, 2072.0], [86.4, 2072.0], [86.5, 2073.0], [86.6, 2073.0], [86.7, 2073.0], [86.8, 2073.0], [86.9, 2073.0], [87.0, 2073.0], [87.1, 2073.0], [87.2, 2073.0], [87.3, 2073.0], [87.4, 2074.0], [87.5, 2074.0], [87.6, 2074.0], [87.7, 2074.0], [87.8, 2074.0], [87.9, 2074.0], [88.0, 2074.0], [88.1, 2074.0], [88.2, 2074.0], [88.3, 2074.0], [88.4, 2074.0], [88.5, 2074.0], [88.6, 2074.0], [88.7, 2075.0], [88.8, 2075.0], [88.9, 2075.0], [89.0, 2075.0], [89.1, 2075.0], [89.2, 2075.0], [89.3, 2075.0], [89.4, 2076.0], [89.5, 2076.0], [89.6, 2076.0], [89.7, 2076.0], [89.8, 2076.0], [89.9, 2076.0], [90.0, 2076.0], [90.1, 2076.0], [90.2, 2077.0], [90.3, 2077.0], [90.4, 2077.0], [90.5, 2077.0], [90.6, 2077.0], [90.7, 2078.0], [90.8, 2078.0], [90.9, 2078.0], [91.0, 2078.0], [91.1, 2078.0], [91.2, 2078.0], [91.3, 2079.0], [91.4, 2079.0], [91.5, 2079.0], [91.6, 2079.0], [91.7, 2079.0], [91.8, 2079.0], [91.9, 2079.0], [92.0, 2080.0], [92.1, 2080.0], [92.2, 2080.0], [92.3, 2080.0], [92.4, 2081.0], [92.5, 2081.0], [92.6, 2081.0], [92.7, 2081.0], [92.8, 2081.0], [92.9, 2082.0], [93.0, 2082.0], [93.1, 2082.0], [93.2, 2082.0], [93.3, 2082.0], [93.4, 2083.0], [93.5, 2083.0], [93.6, 2083.0], [93.7, 2083.0], [93.8, 2083.0], [93.9, 2084.0], [94.0, 2084.0], [94.1, 2084.0], [94.2, 2084.0], [94.3, 2084.0], [94.4, 2084.0], [94.5, 2084.0], [94.6, 2084.0], [94.7, 2084.0], [94.8, 2085.0], [94.9, 2086.0], [95.0, 2086.0], [95.1, 2086.0], [95.2, 2086.0], [95.3, 2086.0], [95.4, 2087.0], [95.5, 2087.0], [95.6, 2088.0], [95.7, 2088.0], [95.8, 2088.0], [95.9, 2088.0], [96.0, 2088.0], [96.1, 2088.0], [96.2, 2089.0], [96.3, 2089.0], [96.4, 2090.0], [96.5, 2091.0], [96.6, 2091.0], [96.7, 2091.0], [96.8, 2091.0], [96.9, 2095.0], [97.0, 2095.0], [97.1, 2095.0], [97.2, 2095.0], [97.3, 2095.0], [97.4, 2095.0], [97.5, 2095.0], [97.6, 2095.0], [97.7, 2097.0], [97.8, 2097.0], [97.9, 2097.0], [98.0, 2097.0], [98.1, 2097.0], [98.2, 2098.0], [98.3, 2098.0], [98.4, 2099.0], [98.5, 2099.0], [98.6, 2099.0], [98.7, 2102.0], [98.8, 2103.0], [98.9, 2104.0], [99.0, 2109.0], [99.1, 2111.0], [99.2, 2112.0], [99.3, 2116.0], [99.4, 2117.0], [99.5, 2137.0], [99.6, 2140.0], [99.7, 2144.0], [99.8, 2146.0], [99.9, 2156.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 14.0, "minX": 2000.0, "maxY": 986.0, "series": [{"data": [[2100.0, 14.0], [2000.0, 986.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 320.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 680.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 680.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 320.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 127.4135802469136, "minX": 1.67738862E12, "maxY": 171.19970414201197, "series": [{"data": [[1.67738862E12, 171.19970414201197], [1.67738868E12, 127.4135802469136]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67738868E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2025.0, "minX": 1.0, "maxY": 2144.0, "series": [{"data": [[2.0, 2027.0], [3.0, 2029.0], [4.0, 2034.0], [5.0, 2032.0], [6.0, 2052.0], [7.0, 2037.0], [8.0, 2026.0], [9.0, 2049.0], [10.0, 2034.0], [11.0, 2043.0], [12.0, 2028.0], [13.0, 2036.0], [14.0, 2044.0], [15.0, 2030.0], [16.0, 2039.0], [17.0, 2046.0], [18.0, 2033.0], [19.0, 2043.0], [20.0, 2025.0], [22.0, 2050.5], [23.0, 2029.0], [24.0, 2040.0], [25.0, 2052.0], [26.0, 2038.0], [27.0, 2059.0], [28.0, 2043.0], [29.0, 2027.0], [30.0, 2052.0], [31.0, 2049.0], [33.0, 2040.0], [32.0, 2059.0], [35.0, 2061.0], [34.0, 2050.0], [37.0, 2034.0], [36.0, 2043.0], [38.0, 2036.0], [41.0, 2040.0], [40.0, 2032.5], [43.0, 2037.0], [42.0, 2045.0], [45.0, 2088.0], [44.0, 2039.0], [47.0, 2061.0], [46.0, 2039.0], [49.0, 2072.0], [48.0, 2091.0], [51.0, 2043.0], [50.0, 2049.0], [53.0, 2045.0], [52.0, 2041.0], [55.0, 2044.0], [54.0, 2051.0], [57.0, 2057.0], [56.0, 2054.0], [59.0, 2037.0], [58.0, 2044.0], [61.0, 2034.0], [60.0, 2028.0], [63.0, 2042.0], [62.0, 2040.0], [67.0, 2035.0], [66.0, 2042.0], [65.0, 2032.0], [64.0, 2027.0], [71.0, 2045.0], [70.0, 2034.0], [69.0, 2033.0], [68.0, 2036.0], [75.0, 2045.0], [74.0, 2051.0], [73.0, 2042.0], [72.0, 2036.0], [78.0, 2028.0], [77.0, 2039.0], [76.0, 2038.0], [83.0, 2032.0], [81.0, 2038.0], [80.0, 2040.0], [87.0, 2051.0], [86.0, 2062.0], [85.0, 2028.0], [84.0, 2041.0], [91.0, 2050.0], [90.0, 2054.0], [89.0, 2055.0], [88.0, 2038.0], [95.0, 2065.0], [94.0, 2046.0], [93.0, 2065.0], [92.0, 2061.0], [99.0, 2063.0], [98.0, 2079.0], [97.0, 2056.0], [96.0, 2070.0], [103.0, 2050.0], [102.0, 2052.0], [101.0, 2086.0], [100.0, 2078.0], [107.0, 2050.0], [106.0, 2051.0], [105.0, 2054.0], [104.0, 2048.0], [111.0, 2048.0], [110.0, 2052.0], [109.0, 2030.0], [108.0, 2049.0], [115.0, 2047.0], [114.0, 2027.0], [113.0, 2053.0], [112.0, 2056.0], [119.0, 2048.0], [118.0, 2059.0], [117.0, 2055.0], [116.0, 2046.0], [123.0, 2047.0], [122.0, 2045.0], [121.0, 2081.0], [120.0, 2062.0], [127.0, 2046.0], [124.0, 2040.0], [135.0, 2060.0], [134.0, 2050.0], [133.0, 2054.0], [132.0, 2046.0], [131.0, 2050.0], [130.0, 2077.0], [129.0, 2045.0], [128.0, 2046.0], [143.0, 2047.0], [142.0, 2062.0], [141.0, 2055.0], [140.0, 2074.0], [139.0, 2065.0], [138.0, 2062.0], [137.0, 2060.0], [136.0, 2046.0], [151.0, 2055.0], [150.0, 2048.0], [149.0, 2053.0], [148.0, 2064.0], [147.0, 2057.0], [146.0, 2080.0], [145.0, 2057.0], [144.0, 2061.0], [159.0, 2076.0], [158.0, 2052.0], [157.0, 2086.0], [156.0, 2063.0], [155.0, 2077.0], [154.0, 2057.0], [153.0, 2047.0], [152.0, 2032.0], [167.0, 2049.0], [166.0, 2055.0], [165.0, 2056.0], [164.0, 2059.0], [163.0, 2049.0], [162.0, 2051.0], [161.0, 2058.0], [160.0, 2051.0], [175.0, 2072.638888888889], [174.0, 2066.4137931034493], [173.0, 2066.2699999999995], [172.0, 2061.392857142856], [171.0, 2055.1377952755897], [170.0, 2052.0298507462694], [169.0, 2049.301886792454], [168.0, 2045.5555555555557], [180.0, 2144.0], [179.0, 2127.0], [178.0, 2131.0], [177.0, 2084.8333333333335], [176.0, 2077.1111111111113], [1.0, 2041.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[157.01299999999992, 2057.4200000000014]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 180.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 626.4, "minX": 1.67738862E12, "maxY": 2996.0666666666666, "series": [{"data": [[1.67738862E12, 2996.0666666666666], [1.67738868E12, 1395.9333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.67738862E12, 1306.9333333333334], [1.67738868E12, 626.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67738868E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2054.8487654321007, "minX": 1.67738862E12, "maxY": 2058.652366863904, "series": [{"data": [[1.67738862E12, 2058.652366863904], [1.67738868E12, 2054.8487654321007]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67738868E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2054.740740740741, "minX": 1.67738862E12, "maxY": 2058.5665680473394, "series": [{"data": [[1.67738862E12, 2058.5665680473394], [1.67738868E12, 2054.740740740741]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67738868E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.3047337278106503, "minX": 1.67738862E12, "maxY": 1.3703703703703707, "series": [{"data": [[1.67738862E12, 1.3047337278106503], [1.67738868E12, 1.3703703703703707]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67738868E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2023.0, "minX": 1.67738862E12, "maxY": 2156.0, "series": [{"data": [[1.67738862E12, 2156.0], [1.67738868E12, 2102.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.67738862E12, 2076.5], [1.67738868E12, 2071.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.67738862E12, 2127.35], [1.67738868E12, 2095.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.67738862E12, 2088.0], [1.67738868E12, 2081.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.67738862E12, 2023.0], [1.67738868E12, 2025.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.67738862E12, 2054.0], [1.67738868E12, 2053.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67738868E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2053.0, "minX": 324.0, "maxY": 2061.0, "series": [{"data": [[324.0, 2053.0], [676.0, 2054.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[324.0, 2058.0], [676.0, 2061.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 676.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 2053.0, "minX": 324.0, "maxY": 2061.0, "series": [{"data": [[324.0, 2053.0], [676.0, 2054.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[324.0, 2058.0], [676.0, 2061.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 676.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 5.4, "minX": 1.67738862E12, "maxY": 11.266666666666667, "series": [{"data": [[1.67738862E12, 11.266666666666667], [1.67738868E12, 5.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67738868E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.67738862E12, "maxY": 7.566666666666666, "series": [{"data": [[1.67738862E12, 7.566666666666666], [1.67738868E12, 3.7666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.67738862E12, 3.7], [1.67738868E12, 1.6333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67738868E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.67738862E12, "maxY": 7.566666666666666, "series": [{"data": [[1.67738862E12, 7.566666666666666], [1.67738868E12, 3.7666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.67738862E12, 3.7], [1.67738868E12, 1.6333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67738868E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.67738862E12, "maxY": 7.566666666666666, "series": [{"data": [[1.67738862E12, 7.566666666666666], [1.67738868E12, 3.7666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.67738862E12, 3.7], [1.67738868E12, 1.6333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67738868E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

