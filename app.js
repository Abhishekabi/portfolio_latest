var _templates = 
{
    popup : 
        `<div class="project-details-popup">
            <div class="left-section">
                <span class="project-name">Chater</span>
                <span class="project-desc">A web socket based chat application</span>
                <div class="project-img"></div>
            </div>
            <div class="right-section">
                <p class="project-abstract">Lorem ipsum dolor sit amet consectetur. Ut vivamus egestas nulla viverra in. Ornare tincidunt congue sit interdum fames massa eget ut. Eget quam fermentum in sit ac vel. Neque velit id consequat augue.<br> <br>
                    Nec libero venenatis feugiat enim ac semper et. Nam pellentesque habitant consectetur viverra. Aliquam est nunc eget ipsum. Velit ut nec quis tellus morbi consequat. In semper auctor fermentum cras nam fermentum.
                </p>
                <div class="languages-used">
                    <div class="lang-card">js</div>
                    <div class="lang-card">css</div>
                    <div class="lang-card">node</div>
                </div>
                <a href="#" class="project-link">view source code</a>
            </div>
            <div class="close-icon" id="close-project-details">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M1 1L15.0341 15.0341" stroke-width="3" stroke-linecap="round"/>
                    <path d="M14.9812 1L1.0001 14.9811" stroke-width="3" stroke-linecap="round"/>
                </svg>
            </div>
        </div>`,

    lightModeicon : 
        `<svg viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9355 6.25C8.78851 6.25 7.03923 7.93359 7.03923 10C7.03923 12.0664 8.78851 13.75 10.9355 13.75C13.0825 13.75 14.8318 12.0664 14.8318 10C14.8318 7.93359 13.0825 6.25 10.9355 6.25ZM20.936 9.39453L17.0925 7.54687L18.4521 3.625C18.6348 3.09375 18.1112 2.58984 17.5633 2.76953L13.4884 4.07813L11.5646 0.375C11.3049 -0.125 10.5662 -0.125 10.3064 0.375L8.3867 4.07422L4.30777 2.76563C3.75579 2.58984 3.23223 3.09375 3.41893 3.62109L4.77857 7.54297L0.935039 9.39453C0.415534 9.64453 0.415534 10.3555 0.935039 10.6055L4.77857 12.4531L3.41893 16.3789C3.23629 16.9102 3.75985 17.4141 4.30777 17.2344L8.38264 15.9258L10.3024 19.625C10.5621 20.125 11.3008 20.125 11.5606 19.625L13.4803 15.9258L17.5552 17.2344C18.1071 17.4102 18.6307 16.9062 18.444 16.3789L17.0844 12.457L20.9279 10.6094C21.4555 10.3555 21.4555 9.64453 20.936 9.39453ZM14.6086 13.5352C12.5833 15.4844 9.28772 15.4844 7.26246 13.5352C5.2372 11.5859 5.2372 8.41406 7.26246 6.46484C9.28772 4.51562 12.5833 4.51562 14.6086 6.46484C16.6339 8.41406 16.6339 11.5859 14.6086 13.5352Z"/>
        </svg>`,

    darkModeIcon : 
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M8.92267 16.5834C11.5466 16.5834 13.9431 15.4198 15.5308 13.5132C15.7657 13.2311 15.5096 12.8191 15.1466 12.8864C11.0193 13.6526 7.229 10.5681 7.229 6.50718C7.229 4.16795 8.51376 2.01686 10.6019 0.858646C10.9237 0.680115 10.8428 0.204475 10.477 0.138627C9.96431 0.0464767 9.44404 7.56728e-05 8.92267 0C4.22686 0 0.415588 3.70895 0.415588 8.29171C0.415588 12.8686 4.22088 16.5834 8.92267 16.5834Z"/>
        </svg>`
}


$(document).ready(function()
{
    var $body = $("body");
    var displayModeSwitcher = $("#display_mode_switcher");
    var projectTile = $('.project-tile');

    displayModeSwitcher.on("click", () => {
        if($body.hasClass("light-mode")){
            $body.removeClass("light-mode");
            displayModeSwitcher.find("#display-mode").text("Day");
            displayModeSwitcher.find("svg").replaceWith(_templates.lightModeicon);
        }
        else {
            $body.addClass("light-mode");
            displayModeSwitcher.find("#display-mode").text("Night");
            displayModeSwitcher.find("svg").replaceWith(_templates.darkModeIcon);
        }

    });

    projectTile.on("click", () => {
        $('body').css("overflow", "hidden");
        $('#overlay').html(_templates.popup);

        $("#close-project-details").on("click", () => {
            $('body').css("overflow", "auto");
            $('#overlay').html("");
        });
    });
})
