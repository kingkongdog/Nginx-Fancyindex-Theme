$(() => {
  $('.breadcrumb li a').remove();
  
  if(location.pathname.split('/').filter(Boolean).length === 1) {
    $('#list tbody tr').first().remove();
  }
})