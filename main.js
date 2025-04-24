window.onload = function () {
    const json = [
        {
          "type": "div",
          "className": "container",
          "children": [
            {
              "type": "div",
              "className": "header",
              "children": [
                {
                  "type": "h2",
                  "text": "Last works"
                },
                {
                  "type": "button",
                  "className": "explore-showcase",
                  "text": "Explore Showcase"
                }
              ]
            },
            {
              "type": "div",
              "className": "grid",
              "children": [
                {
                  "type": "div",
                  "className": "card startup-framework",
                  "children": [
                    {
                      "type": "h3",
                      "text": "Startup Framework"
                    },
                    {
                      "type": "p",
                      "text": "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements."
                    },
                    {
                      "type": "button",
                      "className": "card-button",
                      "text": "Explore"
                    }
                  ]
                },
                {
                  "type": "div",
                  "className": "card web-generator",
                  "children": [
                    {
                      "type": "h3",
                      "text": "Web Generator"
                    },
                    {
                      "type": "p",
                      "text": "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements."
                    },
                    {
                      "type": "button",
                      "className": "card-button",
                      "text": "Explore"
                    }
                  ]
                },
                {
                  "type": "div",
                  "className": "card slides",
                  "children": [
                    {
                      "type": "h3",
                      "text": "Slides 4"
                    },
                    {
                      "type": "p",
                      "text": "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects."
                    },
                    {
                      "type": "button",
                      "className": "card-button",
                      "text": "Explore"
                    }
                  ]
                },
                {
                  "type": "div",
                  "className": "card postcards",
                  "children": [
                    {
                      "type": "div",
                      "className": "postcards-content",
                      "children": [
                        {
                          "type": "h3",
                          "text": "Postcards"
                        },
                        {
                          "type": "p",
                          "text": "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design."
                        },
                        {
                          "type": "button",
                          "className": "card-button",
                          "text": "Explore"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
      
  
    function createElementFromJSON(item) {
      const el = document.createElement(item.type);
  
      if (item.text) {
        el.textContent = item.text;
      }
  
      if (item.style) {
        for (const [key, value] of Object.entries(item.style)) {
          el.style[key] = value;
        }
      }
      if (item.className) {
        el.className = item.className;
      }
      
      if (item.onClick) {
        el.addEventListener('click', () => eval(item.onClick));
      }
  
      if (item.children && Array.isArray(item.children)) {
        item.children.forEach(child => {
          const childEl = createElementFromJSON(child);
          el.appendChild(childEl);
        });
      }
  
      return el;
    }
  
    json.forEach(item => {
      const element = createElementFromJSON(item);
      document.body.appendChild(element);
    });
  
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.backgroundColor = '#f9f9f9';
  };
  