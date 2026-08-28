$(() => {
  $('.breadcrumb li a').first().remove();
  
  const segments = location.pathname.split('/').filter(Boolean)
  document.title = segments[0]
  if(segments.length === 1) {
    $('#list tbody tr').first().remove();
  }
})