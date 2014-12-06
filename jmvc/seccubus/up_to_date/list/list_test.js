/*
 * Copyright 2014 Petr, Frank Breedijk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
steal('funcunit',function(){

module("Seccubus.UpToDate.List", { 
	setup: function(){
		S.open("//seccubus/up_to_date/list/list.html");
	}
});

test("up_to_dates", function(){
	// S('#create').click()
	
	// wait until grilled cheese has been added
	S('h1:contains(Seccubus.UpToDate.List Demo)').exists(function(){
		ok(true, "up_to_date ok")
	});
	S.confirm(true);
	// S('h3:last a').click();
	
	
	// S('h3:contains(Configuration file)').missing(function(){
	// 	ok(true,"Configuration file Removed")
	// });
	
});


});
