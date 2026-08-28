$(() => {
  $('.breadcrumb li a').first().remove();
  
  const segments = location.pathname.split('/').filter(Boolean)
  if(segments.length === 1) {
    $('#list tbody tr').first().remove();
    document.title = segments[0]
  }
})