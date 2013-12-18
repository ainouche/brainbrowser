/* 
 * Copyright (C) 2011 McGill University
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
* @author: Tarek Sherif
* @author: Nicolas Kassis
*/

(function() {
  "use strict";

  var result = {};
  
  self.addEventListener("message", function(e) {
    var message = e.data;
    var cmd = message.cmd;
    var data = message.data;
    if (cmd === "parse") {
      parse(data);
      self.postMessage(result);
    } else {
      self.terminate();
    }
  });
  
  function parse(string) {
    var i, count, min, max;
  
    string = string.replace(/^\s+/, '').replace(/\s+$/, '');
    result.values = string.split(/\s+/);
    min = result.values[0];
    max = result.values[0];
    for(i = 0, count = result.values.length; i < count; i++) {
      result.values[i] = parseFloat(result.values[i]);
      min = Math.min(min, result.values[i]);
      max = Math.max(max, result.values[i]);
    }
    result.min = min;
    result.max = max;
  }
 
})();

