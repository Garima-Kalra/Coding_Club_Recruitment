document.addEventListener('DOMContentLoaded', function() {
 
const blog = document.getElementById('displayBlog');
const content = document.getElementById('displayContent');
const closeBtn = document.querySelector('.close');

    fetch('info.json')
    .then(res => res.json())
    .then(data => {

        const container = document.getElementById('sideData');

        data.forEach(item => {
            if (item.id > 1 && item.id <= 8 && item.id != 7) {
                const fact = document.createElement('div');
                fact.classList.add('fact');
                fact.innerHTML = `
                    <div class="sideData-content">
                        <div class="sideData-image">
                            <img src="${item.image}" alt="Image">
                        </div>
                        <div class="sideData-sub">
                            <div class="sideData-text">
                                <p>${item.headline}</p>
                            </div>
                            <div class="date1">
                                <p><strong>Date:</strong> ${item.date}</p>
                            </div>
                        </div>
                    </div>
                `;
                fact.addEventListener('click', function() {
                    content.innerHTML = `
                        <div class="modalData-text">
                            <p>${item.content}</p>
                        </div>
                    `;
                    blog.style.display = 'block';
                });
                container.appendChild(fact);
            }
        });
    
 
        const container1 = document.getElementById('mainData1'); 
        
        data.forEach(item => {
            if (item.id == 1) {
            const fact = document.createElement('div');
            fact.classList.add('fact');
            fact.innerHTML = `
                <div class="mainData1-content">
                    <div class="mainData1-image">
                        <img src="${item.image}" alt="Image">
                    </div>
                    <div class="mainData1-sub">
                        <div class="mainData1-btn">
                            <button style="margin-right:10px;">Featured</button><button>${item.type}</button>
                        </div>
                        <div class="mainData1-text">
                            <p>${item.headline}</p>
                        </div>
                        <div class="date">
                            <p>~${item.author}</p>
                        </div>
                        <div class="date">
                            <p style="margin-left:5px;"><i class="fa-regular fa-calendar"></i> ${item.date}</p>
                        </div>
                    </div>
                </div>
            `;
            fact.addEventListener('click', function() {
                content.innerHTML = `
                        <div class="modalData-text">
                            <p>${item.content}</p>
                        </div>
                    `;
                blog.style.display = 'block';
            });
             container1.appendChild(fact);
            }
        });

        const container2 = document.getElementById('mainData2'); 

        data.forEach(item => {
            if (item.id == 7) {
                const fact = document.createElement('div');
                fact.classList.add('fact');
            fact.innerHTML = `
                <div class="mainData2-content">
                    <div class="mainData2-image">
                        <img src="${item.image}" alt="Image">
                    </div>
                    <div class="mainData2-sub">
                        <div class="mainData2-btn">
                            <button style="margin-right:10px;">Featured</button><button>${item.type}</button>
                        </div>
                        <div class="mainData2-text">
                            <p>${item.headline}</p>
                        </div>
                        <div class="date">
                            <p>~${item.author}</p>
                        </div>
                        <div class="date">
                            <p style="margin-left:5px;"><i class="fa-regular fa-calendar"></i> ${item.date}</p>
                        </div>
                    </div>
                </div>
            `;
            fact.addEventListener('click', function() {
                content.innerHTML = `
                        <div class="modalData-text">
                            <p>${item.content}</p>
                        </div>
                    `;
                blog.style.display = 'block';
            });
             container2.appendChild(fact);
            }
        });

        const container3 = document.getElementById('mainData3'); 

        data.forEach(item => {
            if (item.id == 9) {
                const fact = document.createElement('div');
                fact.classList.add('fact');
            fact.innerHTML = `
                <div class="mainData3-content">
                    <div class="mainData3-image">
                        <img src="${item.image}" alt="Image">
                    </div>
                    <div class="mainData3-sub">
                        <div class="mainData3-btn">
                            <button style="margin-right:10px;">Featured</button><button>${item.type}</button>
                        </div>
                        <div class="mainData3-text">
                            <p>${item.headline}</p>
                        </div>
                        <div class="date">
                            <p>~${item.author}</p>
                        </div>
                        <div class="date">
                            <p style="margin-left:5px;"><i class="fa-regular fa-calendar"></i> ${item.date}</p>
                        </div>
                    </div>
                </div>
            `;
            fact.addEventListener('click', function() {
                content.innerHTML = `
                        <div class="modalData-text">
                            <p>${item.content}</p>
                        </div>
                    `;
                blog.style.display = 'block';
            });
             container3.appendChild(fact);
            }
        });

        const container4 = document.getElementById('mainData4'); 

        data.forEach(item => {
            if (item.id == 10) {
                const fact = document.createElement('div');
                fact.classList.add('fact');
            fact.innerHTML = `
                <div class="mainData4-content">
                    <div class="mainData4-image">
                        <img src="${item.image}" alt="Image">
                    </div>
                    <div class="mainData4-sub">
                        <div class="mainData4-btn">
                           <button style="margin-right:10px;">Featured</button><button>${item.type}</button>
                        </div>
                        <div class="mainData4-text">
                            <p>${item.headline}</p>      
                        </div>
                        <div class="date">
                            <p>~${item.author}</p>
                        </div>
                        <div class="date">
                            <p style="margin-left:5px;"><i class="fa-regular fa-calendar"></i> ${item.date}</p>
                        </div>
                    </div>
                </div>
            `;
            fact.addEventListener('click', function() {
                content.innerHTML = `
                        <div class="modalData-text">
                            <p>${item.content}</p>
                        </div>
                    `;
                blog.style.display = 'block';
            });
             container4.appendChild(fact);
            }
        });
    });
        closeBtn.addEventListener('click', function() {
            blog.style.display = 'none';
        });
    
        window.addEventListener('click', function(event) {
            if (event.target == blog) {
                blog.style.display = 'none';
            }
        });

        
            const buttons = document.querySelectorAll('#btn .panel');
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    
                    buttons.forEach(btn => {
                        btn.style.backgroundColor = 'white';
                        btn.style.color = 'black';
                    });
                   
                    button.style.backgroundColor = 'black'; 
                    button.style.color = 'white'; 
                });
            });
        
    
        const options = document.querySelectorAll('.nav-list-item a');
                
        options.forEach(option => {
            option.addEventListener('click', function() {
                options.forEach(nav => {
                    nav.classList.remove('active'); 
                });
                option.classList.add('active'); 
            });
        });

    })
    .catch(error => console.log(error));

   
   
    

