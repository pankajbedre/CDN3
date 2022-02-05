var iframe = document.getElementById("myIframe");
      function changeStuff(iframe_color, iframe_height, autoHeight) {
        const doc = iframe.contentWindow;
        const obj = { background: iframe_color };
        setTimeout(() => {
          doc.postMessage(obj, "*");
        }, 100);

        if (autoHeight) {
          window.addEventListener(
            "message",
            function (e) {
              iframe.style.height = e.data + 'px';
            },
            false
          );
        } else {
          iframe.style.height = iframe_height + 'px';
        }
      }
