#include <stdio.h>
#include <stdlib.h>

#define xor_swap(a, b) do	\
	{			\
		a ^= b;		\
		b ^= a;		\
		a ^= b;		\
	} while (0)

size_t strlen(const char *);
void reverse_string(char *);

int main(void)
{
	char array[] = "Nguyen A Tan"; 
	
	reverse_string(array);
	printf("%s\n", array);
	
	//getch();
	return 0;
}

void reverse_string(char *str)
{
	if (!str)
		return;
		
	char *end = str + strlen(str) - 1;
	
	while (str < end) {
		xor_swap(*str, *end);
		++str;
		--end;
	}
}

size_t strlen(const char *str)
{
	const char *s;
	
	for (s = str; *s; ++s);
	
	return (s - str);
}
