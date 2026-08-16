document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuButton =
        document.querySelector(".menu-btn");

    const navigation =
        document.querySelector(".navlinks");


    if (menuButton && navigation) {

        menuButton.addEventListener(
            "click",
            function () {

                navigation.classList.toggle(
                    "mobile-open"
                );

            }
        );


        navigation
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navigation.classList.remove(
                            "mobile-open"
                        );

                    }
                );

            });

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    let currentPage =
        window.location.pathname
            .split("/")
            .pop();


    if (
        currentPage === "" ||
        currentPage === "/"
    ) {
        currentPage = "index.html";
    }


    document
        .querySelectorAll(".navlinks a")
        .forEach(function (link) {

            const href =
                link.getAttribute("href");


            if (href === currentPage) {

                link.classList.add("active");

            }

        });


    /* =========================
       FAQ ACCORDION
    ========================= */

    const faqQuestions =
        document.querySelectorAll(".faq-q");


    faqQuestions.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const item =
                    button.closest(".faq-item");


                document
                    .querySelectorAll(".faq-item")
                    .forEach(function (otherItem) {

                        if (
                            otherItem !== item
                        ) {

                            otherItem.classList.remove(
                                "open"
                            );

                        }

                    });


                item.classList.toggle("open");

            }
        );

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    function revealOnScroll() {

        revealElements.forEach(
            function (element) {

                const position =
                    element.getBoundingClientRect()
                        .top;


                if (
                    position <
                    window.innerHeight - 70
                ) {

                    element.classList.add(
                        "show"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        revealOnScroll
    );


    revealOnScroll();


    /* =========================
       BACK TO TOP
    ========================= */

    const backTop =
        document.querySelector(".backtop");


    if (backTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 500
                ) {

                    backTop.style.display =
                        "grid";

                } else {

                    backTop.style.display =
                        "none";

                }

            }
        );


        backTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =========================
       PRICE FILTER
    ========================= */

    const filters =
        document.querySelectorAll(".filter");


    filters.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                filters.forEach(
                    function (filter) {

                        filter.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const selected =
                    button.dataset.filter;


                document
                    .querySelectorAll(".price-group")
                    .forEach(function (group) {

                        const category =
                            group.dataset.category;


                        if (
                            selected === "all" ||
                            selected === category
                        ) {

                            group.style.display =
                                "block";

                        } else {

                            group.style.display =
                                "none";

                        }

                    });

            }
        );

    });

});