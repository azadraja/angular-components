(function () {
    'use strict';

    var app = angular.module('app');
    app.component('sliderComponent', {
        bindings: {
            imageUris: '=',
            slideroptions: '='
        },
        templateUrl: 'js/components/sliderComponent.html',
        controller: function () {
            this.hasbulletnavigator = false;
            this.jssorclass = 'none';
            this.jssor_slider1 = null;
            this.id = "MyVURU" + Math.round(Math.random() * 1000);
            var triggered = false;

            this.videoList = {};
            this.obj = {};

            this.trigger = function () {
                if (triggered) return;
                triggered = true;
                var options = {};

                if (this.slideroptions) {
                    if (this.slideroptions.autoPlay) {
                        options["$AutoPlay"] = true;
                    }
                    if (this.slideroptions.arrowNavigator) {
                        options["$ArrowNavigatorOptions"] = {
                            $Class: $JssorArrowNavigator$,
                            $ChanceToShow: 2
                        };
                    }
                    if (this.slideroptions.bulletNavigator) {
                        this.hasbulletnavigator = true;
                        var obj = { //[Optional] Options to specify and enable navigator or not
                            $Class: $JssorBulletNavigator$, //[Required] Class to create navigator instance
                            $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
                            $AutoCenter: 1, //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                            $Steps: 1, //[Optional] Steps to go for each navigation request, default value is 1
                            $Rows: 1, //[Optional] Specify lanes to arrange items, default value is 1
                            $SpacingX: 10, //[Optional] Horizontal space between each item in pixel, default value is 0
                            $SpacingY: 10, //[Optional] Vertical space between each item in pixel, default value is 0
                            $Orientation: 1 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
                        };
                        options["$BulletNavigatorOptions"] = obj;
                        options["$DragOrientation"] = 3;
                        options["$PlayOrientation"] = 3;
                    }
                    if (this.slideroptions.slideTime != null) {
                        options["$Idle"] = this.slideroptions.slideTime;
                    }
                    options["$ThumbnailNavigatorOptions"] = {
                        $Class: $JssorThumbnailNavigator$, //[Required] Class to create thumbnail navigator instance
                        $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
                        $ActionMode: 1, //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
                        $AutoCenter: 0, //[Optional] Auto center thumbnail items in the thumbnail navigator container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 3
                        $Rows: 1, //[Optional] Specify lanes to arrange thumbnails, default value is 1
                        $SpacingX: 3, //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
                        $SpacingY: 3, //[Optional] Vertical space between each thumbnail in pixel, default value is 0
                        $Cols: 9, //[Optional] Number of pieces to display, default value is 1
                        $ParkingPosition: 260, //[Optional] The offset position to park thumbnail
                        $Orientation: 1, //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
                        $NoDrag: false //[Optional] Disable drag or not, default value is false
                    };
                    this.obj = {
                        "Fade": {
                            $Duration: 1200,
                            $Opacity: 2
                        },
                        "Flutter Outside In Wind": {
                            $Duration: 1800,
                            x: 1,
                            y: 0.2,
                            $Delay: 30,
                            $Cols: 10,
                            $Rows: 5,
                            $Clip: 15,
                            $During: {
                                $Left: [0.3, 0.7],
                                $Top: [0.3, 0.7]
                            },
                            $Reverse: true,
                            $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
                            $Easing: {
                                $Left: $JssorEasing$.$EaseInOutSine,
                                $Top: $JssorEasing$.$EaseOutWave,
                                $Clip: $JssorEasing$.$EaseInOutQuad
                            },
                            $Assembly: 2050,
                            $Outside: true,
                            $Round: {
                                $Top: 1.3
                            }
                        },
                        "Bounce Down": {
                            $Duration: 1000,
                            y: 1,
                            $Easing: $JssorEasing$.$EaseInBounce
                        },
                        "Fly Up Swirl With Chess": {
                            $Duration: 600,
                            x: -1,
                            y: -1,
                            $Delay: 50,
                            $Cols: 8,
                            $Rows: 4,
                            $Reverse: true,
                            $Formation: $JssorSlideshowFormations$.$FormationSwirl,
                            $ChessMode: {
                                $Column: 3,
                                $Row: 12
                            },
                            $Easing: {
                                $Left: $JssorEasing$.$EaseInCubic,
                                $Top: $JssorEasing$.$EaseInCubic,
                                $Opacity: $JssorEasing$.$EaseOutQuad
                            },
                            $Assembly: 513,
                            $Opacity: 2
                        }
                    };
                    if (this.slideroptions.slideTransition) {
                        if (this.slideroptions.slideTransition !== "" && this.slideroptions.slideTransition !== undefined)

                            options["$SlideshowOptions"] = {
                                $Class: $JssorSlideshowRunner$,
                                $Transitions: [this.obj[this.slideroptions.slideTransition]],
                                $TransitionsOrder: 2,
                                $ShowLink: true
                            };
                    }
                }

                var img = '<div data-p="112.5" style="position:relative;">{{slideText}}<img style="position : relative;" u="image" src="{{image.url}}" />';
                var video = '<div style="display:none"><video u="player" id=video{{id}} width="100%">' +
                    '<source src="{{image.url}}" type="video/mp4"/>' +
                    '</video></div>';
                var thumb = '<img u="thumb" src="{{image.thumb}}" />'
                var htmlData = "";
                for (var i = 0, iL = this.imageUris.length; i < iL; i++) {

                    var slideText = "";
                    if (this.imageUris[i].text != undefined && this.imageUris[i].text != "") {
                        slideText = this.imageUris[i].text;

                    }
                    var videoId = Math.round(Math.random() * 10000);
                    htmlData += ((this.imageUris[i].isVideo) ? video : img).replace("{{image.url}}", this.imageUris[i].url)
                        .replace("{{slideText}}", slideText).replace("{{id}}", videoId);
                    if (this.imageUris[i].thumburl !== undefined && this.imageUris[i].thumburl != "") {
                        htmlData += thumb.replace("{{image.thumb}}", this.imageUris[i].thumburl);
                    }
                    htmlData += '</div>';
                    if (this.imageUris[i].isVideo) {
                        this.videoList[i] = {
                            "isAutoplay": this.slideroptions.videoAutoPlay,
                            handle: videoId
                        }
                    }
                }

                document.getElementById(this.id + 'Container').innerHTML = htmlData;
                var ctrl = this;

                function ScaleSlider() {
                    var refSize = ctrl.jssor_slider1.$Elmt.parentNode.clientWidth;
                    if (refSize) {
                        refSize = Math.min(refSize, 600);
                        ctrl.jssor_slider1.$ScaleWidth(refSize);
                    } else {
                        window.setTimeout(ScaleSlider, 30);
                    }
                }



                setTimeout(() => {
                    ctrl.jssor_slider1 = new $JssorSlider$(this.id, options);

                    ctrl.jssor_slider1.$On($JssorSlider$.$EVT_POSITION_CHANGE, function (position, fromPosition, virtualPosition, virtualFromPosition) {
                        if (!ctrl.videoList[position]) {
                            document.getElementById(ctrl.id + "LilButton").style.display = "none";
                        }
                        if (ctrl.videoList[position]) {
                            document.getElementById(ctrl.id + "LilButton").style.display = "block";
                        }
                    });
                    ctrl.jssor_slider1.$On($JssorSlider$.$EVT_STATE_CHANGE, function (slideIndex, progress, progressBegin, idleBegin, idleEnd, progressEnd) {
                        if (progress === progressBegin) {

                            if (ctrl.videoList[slideIndex] != undefined) {
                                if (ctrl.videoList[slideIndex]) {


                                    if (ctrl.videoList[slideIndex].isAutoplay) {
                                        document.getElementById(ctrl.id + "LilButton").style.display = "none";
                                        ctrl.jssor_slider1.$Pause();
                                        var playVideo = document.getElementById('video' + ctrl.videoList[slideIndex].handle);
                                        playVideo.addEventListener('ended', resumeSlider, false);
                                        playVideo.play()

                                        function resumeSlider(e) {
                                            if (ctrl.slideroptions.autoPlay)
                                                ctrl.jssor_slider1.$Play();

                                        }
                                    } else if (!ctrl.videoList[slideIndex].isAutoplay) {
                                        document.getElementById(ctrl.id + "LilButton").style.display = "block";

                                        var playVideo = document.getElementById('video' + ctrl.videoList[slideIndex].handle);
                                        ctrl.play = function playPause() {
                                            if (playVideo.paused) {
                                                playVideo.play();
                                                document.getElementById(ctrl.id + "LilButton").style.display = "none";
                                            } else {
                                                playVideo.pause();
                                                document.getElementById(ctrl.id + "LilButton").style.display = "block";
                                            }
                                        };

                                    }
                                }
                            }

                        }
                    });


                    $(window).bind("load", ScaleSlider);
                    $(window).bind("resize", ScaleSlider);
                    $(window).bind("orientationchange", ScaleSlider);
                }, 1000);

            };

        }
    });
})();