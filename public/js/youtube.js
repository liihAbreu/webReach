
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var players = [];
      function onYouTubeIframeAPIReady() {
        players.push(
            new YT.Player('player1', {
                height: '360',
                width: '640',
                videoId: 'SQ1uGyx8OYE',
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
            })
        );
        
        players.push(
            new YT.Player('player2', {
                height: '360',
                width: '640',
                videoId: 'wSepch5_Wbs',
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
            })
        );

        players.push(
            new YT.Player('player3', {
                height: '360',
                width: '640',
                videoId: 'ZaFzhbfPOnI',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            })
        );

        players.push(
            new YT.Player('player4', {
                height: '360',
                width: '640',
                videoId: 'uWOLUV6L64c',
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
            })
        );

        players.push(
            new YT.Player('player5', {
                height: '360',
                width: '640',
                videoId: 'QpT3nGXSbs0',
                events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
                }
            })
        );
        
    }

      function onPlayerReady(event) {
        event.target.pauseVideo();
      }

      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            stopVideoAll(event.target.a.id);
        }
        
      }
      function stopVideoAll(id) {
        players.map(function(player){
            if(id === player.a.id)
                return;
            else
                player.stopVideo(); 
        })
      }


