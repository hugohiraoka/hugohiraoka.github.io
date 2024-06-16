// MathJax configuration
function init_mathjax() {
    if (window.MathJax) {
        console.log("MathJax loaded");

        MathJax.Hub.Config({
            TeX: {
                equationNumbers: {
                    autoNumber: "AMS",
                    useLabelIds: true
                }
            },
            tex2jax: {
                inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
                processEscapes: true,
                processEnvironments: true
            },
            displayAlign: 'center',
            CommonHTML: {
                linebreaks: {
                    automatic: true
                }
            }
        });

        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    } else {
        console.error("MathJax not loaded");
    }
}

init_mathjax();

// Initialize MathJax after DOM content is loaded
//document.addEventListener('DOMContentLoaded', function() {
//    console.log("DOM fully loaded and parsed");
//    init_mathjax();
//    fetchRepositories(); // Trigger fetching repositories after MathJax is initialized
//});
