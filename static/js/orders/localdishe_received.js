


var localdishe_url = "http://192.168.43.140:6060/";
// var localdishe_url = "http://172.105.158.108:6060/";


var seconds = 1000;
var loader_seconds = 3000;

/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           RECIEVED ORDERS
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

function fetch_localdishe_orders_received_all_data ()
{
    document.getElementById("localdishe-orders-received-loader-all").style.display="block";
    setTimeout(localdishe_orders_view_all,loader_seconds)
}

    // ==================
function localdishe_orders_view_all ()
    {
        document.getElementById("localdishe-orders-received-loader-all").style.display="none";
        let req = new XMLHttpRequest();
        req.open('post', localdishe_url+'localdishe_view_all_orders',true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length){alert("No results found")}
                else
                    {
                        let tbody = document.getElementById('localdishe-show-all-tbody');
                        tbody.innerHTML = ' ';
    
                        // draw table
                        let td,tr;
                        // add table headings
                        let th_names = new Array ();
                        th_names.push(["Name","Food","Avenue","Location", "Contacts","Price", "Date","Time", "Staff"]);
                        let columns_to_count = th_names[0].length;
                        row = tbody.insertRow(-1); 
                        for (let looper =0; looper<columns_to_count; ++looper)
                            {
                                let headerNames = document.createElement("th");
                                headerNames.className='js_table_headers'
                                headerNames.innerHTML = th_names[0][looper];
                                row.appendChild(headerNames)
                            }
    
                        for (let table_row = 0; table_row < results.length; ++table_row)
                            {
                                tr = document.createElement('tr');
                                tr.className='js_table_row';
                                for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                    {
                                        td = document.createElement('td');
                                        td.setAttribute("align", "center"); 
                                        td.innerHTML = results[table_row][table_data];
                                        tr.appendChild(td)
                                    }
                                    tbody.appendChild(tr)
                            }
                    }
            }
            let div_tag = document.getElementById('localdishe-show-all-tbody-div');
            req.send(div_tag);  
            setTimeout(localdishe_save_by_date_today_data,seconds);      
    }
    

// ============================= view Today

function fetch_localdishe_orders_received_date_today_data ()
{
    document.getElementById("localdishe-orders-received-loader-date-today").style.display="block";
    setTimeout(localdishe_orders_view_by_date_today,loader_seconds)
}
function localdishe_orders_view_by_date_today ()
{
    document.getElementById("localdishe-orders-received-loader-date-today").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', localdishe_url+'localdishe_orders_view_by_date_today',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('localdishe-date-today-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Name","Food","Avenue","Location", "Contacts", "Price","Date","Time", "Staff"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let data = document.getElementById('localdishe-orders-view-by-date-today-div');
        req.send(data); 
        setTimeout (localdishe_save_by_date_today_data,seconds);       
}

// ============================= >>> date date
function fetch_localdishe_orders_received_date_date_data ()
{
    document.getElementById("localdishe-orders-received-loader-date-date").style.display="block";
    setTimeout(localdishe_orders_view_by_date_date,loader_seconds)
}
function localdishe_orders_view_by_date_date ()
{
    document.getElementById("localdishe-orders-received-loader-date-date").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', localdishe_url+'localdishe_orders_view_by_date_date',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('localdishe-date-date-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Food","Avenue","Location", "Contacts","Price", "Date","Time", "Staff"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = new FormData(document.getElementById('localdishe-orders-date-date-form'));
        req.send(date);        
        setTimeout(localdishe_save_date_date_data,seconds);
}

function fetch_localdishe_orders_received_from_to_all_data () 
{
    document.getElementById("localdishe-orders-received-loader-from-to-all").style.display="block";
    setTimeout(localdishe_orders_from_to_all,loader_seconds)
}
function localdishe_orders_from_to_all ()
{
    document.getElementById("localdishe-orders-received-loader-from-to-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', localdishe_url+'localdishe_orders_from_to_all',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('localdishe-from-to-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Food","Avenue","Location", "Contacts","Price", "Date","Time", "Staff"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 1; table_data< (results[table_row].length-1);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date =  new FormData(document.getElementById('localdishe-from-to-form'));
        req.send(date);        
        setTimeout(localdishe_save_from_to,seconds);
}
// ======================================

// +++++++++++++++++++++++++++++++++++++++>>>
function fetch_localdishe_orders_received_last_week_all_data ()
{
    document.getElementById("localdishe-orders-received-loader-last-week-all").style.display="block";
    setTimeout(localdishe_orders_last_week_all,loader_seconds)
}

function localdishe_orders_last_week_all ()
{
    document.getElementById("localdishe-orders-received-loader-last-week-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', localdishe_url+'localdishe_orders_last_week_all_data',true)
    req.onload = function ()
        {
            document.getElementById("localdishe-orders-received-loader-last-week-all").style.display="none";
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('localdishe-last-week-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Food","Avenue","Location", "Contacts", "Price","Date","Time", "Staff"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 1; table_data< (results[table_row].length-1);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('localdishe-last-week-all-div');
        req.send(date);        
        setTimeout(localdishe_save_show_last_week_all,seconds);
}

function fetch_localdishe_orders_received_this_month_all_data ()
{
    document.getElementById("localdishe-orders-received-loader-this-month-all").style.display="block";
    setTimeout(localdishe_orders_this_month_all,loader_seconds)
}

function localdishe_orders_this_month_all ()
{
    document.getElementById("localdishe-orders-received-loader-this-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', localdishe_url+'localdishe_orders_this_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('localdishe-this-month-all-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Name","Food","Avenue","Location", "Contacts","Price", "Date","Time", "Staff"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            // class="w3-hover-black"
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            // tr.className='js_table';
                            //draw td
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 

                                    // put in data
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('localdishe-this-month-all-div');
        req.send(date);        
        setTimeout(localdishe_save_show_this_month_all,seconds);
}


// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_localdishe_orders_received_last_month_all_data ()
{
    document.getElementById("localdishe-orders-received-loader-last-month-all").style.display="block";
    setTimeout(localdishe_orders_last_month_all,loader_seconds)
}

function localdishe_orders_last_month_all ()
{
    document.getElementById("localdishe-orders-received-loader-last-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', localdishe_url+'localdishe_orders_last_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('localdishe-last-month-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Food","Avenue","Location", "Contacts","Price", "Date","Time", "Staff"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('localdishe-last-month-all-div');
        req.send(date);        
        setTimeout(localdishe_save_show_last_month_all,seconds);
}

// ========================================================================
// On storage
function localdishe_save_by_date_today_data ()
{
    let data = document.getElementById ("localdishe-show-all-tbody").innerHTML;
    localStorage.setItem("localdisheall", data);
}

function localdishe_save_by_date_today_data ()
{
    let data = document.getElementById ("localdishe-date-today-tbody").innerHTML;
    localStorage.setItem("localdishedatetoday", data);
}
function localdishe_save_date_date_data ()
{
    let data = document.getElementById ("localdishe-date-date-tbody").innerHTML;
    localStorage.setItem("localdishedatedate", data);
}

function localdishe_save_from_to ()
{
    let data = document.getElementById("localdishe-from-to-all-tbody").innerHTML;
    localStorage.setItem("localdishefromtoall",data);
}

function localdishe_save_show_last_week_all ()
{
    let data = document.getElementById ("localdishe-last-week-all-tbody").innerHTML;
    localStorage.setItem("localdishelstweekall", data);
}

function localdishe_save_show_this_month_all ()
{
    let data = document.getElementById ("localdishe-show-all-tbody").innerHTML;
    localStorage.setItem("localdishedismthall", data);
}

function localdishe_save_show_last_month_all ()
{
    let data = document.getElementById ("localdishe-last-month-all-tbody").innerHTML;
    localStorage.setItem("localdishelstmthall", data);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Load_Localdishe_Offline_Data () 
{
    document.getElementById("localdishe-show-all-tbody").innerHTML = localStorage.getItem("localdisheall");
    document.getElementById("localdishe-date-today-tbody").innerHTML = localStorage.getItem("localdishedatetoday");
    document.getElementById("localdishe-date-date-tbody").innerHTML = localStorage.getItem("localdishedatedate");
    document.getElementById("localdishe-from-to-all-tbody").innerHTML = localStorage.getItem("localdishefromtoall")
    document.getElementById("localdishe-last-week-all-tbody").innerHTML = localStorage.getItem("localdishelstweekall");
    document.getElementById("localdishe-this-month-all-tbody").innerHTML = localStorage.getItem("localdishedismthall");
    document.getElementById("localdishe-last-month-all-tbody").innerHTML = localStorage.getItem("localdishelstmthall");
}


