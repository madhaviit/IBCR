function emove(){
    try
      {
         x = document.getElementsByClassName('ib-rolling-ribbon');
        //  x[0].innerHTML = '';
         x[0].remove();
      }
    catch(err)
      {
        //Skip if "pagelet_ego_pane_w" div tag isn't on this page
      }
      try
      {
         m = document.getElementsByClassName('jumbotron mcq-banner expert-redirect  ');
        //  m[0].innerHTML = '';
         m[0].remove();
      }
    catch(err)
      {
        //Skip if "pagelet_ego_pane_w" div tag isn't on this page
      }
      try
      {
            y = document.getElementsByClassName('ib-cms__mc-widget');
            // y[0].innerHTML='';
            y[0].remove();
      }
    catch(err)
      {
        //Skip if "pagelet_ego_pane" div tag isn't on this page
      }
        try
      {
        z = document.getElementsByClassName('auth-trigger__content--tablet');
        // z[0].innerHTML='';
        z[0].remove();
      }
    catch(err)
      {
        //Skip if "pagelet_side_ads" div tag isn't on this page
      }
          try
      {
        w = document.getElementsByClassName('ib-topic-section__problem-tab');
        w[0].remove();
      }
    catch(err)
      {
        //Skip if "fbPhotoSnowliftAdsSide" div tag isn't on this page
      }
      try
      {
        v = document.getElementsByClassName('feedback-box');
        // v[0].innerHTML='';
        v[0].remove();
      }
    catch(err)
      {
        //Skip if "fbPhotoSnowliftAdsSide" div tag isn't on this page
      }
      try
      {
         x = document.getElementsByClassName('auth-trigger gtm-track-element ibpp-button primary');
        //  x[0].innerHTML = '';
         x[0].remove();
      }
    catch(err)
      {
        //Skip if "pagelet_ego_pane_w" div tag isn't on this page
      }
      try
      {
         x = document.getElementsByClassName('ib-header__experience-scaler-cta-text');
        //  x[0].innerHTML = '';
         x[0].remove();
      }
    catch(err)
      {
        //Skip if "pagelet_ego_pane_w" div tag isn't on this page
      }
      try
      {
         x = document.getElementsByClassName('ib-feedback-nudge');
        //  x[0].innerHTML = '';
         x[0].remove();
      }
    catch(err)
      {
        //Skip if "pagelet_ego_pane_w" div tag isn't on this page
      }
      try
      {
         x = document.getElementsByClassName('tappable p-hint-links__item');
        //  x[0].innerHTML = '';
         x[0].remove();
      }
    catch(err)
      {
        //Skip if "pagelet_ego_pane_w" div tag isn't on this page
      }
      try
      {
         x = document.getElementsByClassName('ib-mc-fl-modal');
        //  x[0].innerHTML = '';
         x[0].remove();
      }
    catch(err)
      {
        //Skip if "pagelet_ego_pane_w" div tag isn't on this page
      }
      try
      {
         x = document.getElementsByClassName('alert alert-warning alert-dismissible');
        //  x[0].innerHTML = '';
         x[0].remove();
      }
    catch(err)
      {
        //Skip if "pagelet_ego_pane_w" div tag isn't on this page
      }
      try
      {
         x = document.getElementsByClassName('ib-scaler-hub__header');
        //  x[0].innerHTML = '';
         x[0].remove();
      }
    catch(err)
      {
        //Skip if "pagelet_ego_pane_w" div tag isn't on this page
      }
    console.log('Decluttered');
    setTimeout(function(){emove();},1000);
    }
    emove();