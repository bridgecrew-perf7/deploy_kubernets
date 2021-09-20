from django.http import JsonResponse

def todo(request):

    return JsonResponse({'success': True}, status=200, safe=False)
