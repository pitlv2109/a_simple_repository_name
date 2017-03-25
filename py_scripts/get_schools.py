import urllib2
from bs4 import BeautifulSoup

def parse_text(urls):
    for url in urls:
        prefix = "http://www.reddit.com/r/"

        abbr = url['href'][len(prefix):]
        abbr = abbr[0:len(abbr)-1]
        if len(abbr) > 0 and abbr[0] == '/':
            abbr = abbr[1:]

        # Lower abbr
        abbr = abbr.lower()

        write_to_file(abbr, url.next[1:])

def write_to_file(abbr, name):
    f = open('./schools_info.txt', 'a')
    try:
        f.write(name)
        f.write('\n')
        f.write(abbr)
        f.write('\n')
    except:
        pass

def scrape():
    page = urllib2.urlopen('https://www.reddit.com/r/college/wiki/faq').read()
    soup = BeautifulSoup(page)
    soup.prettify()

    # Get all <a> tags
    all_urls = soup.findAll('a', href=True)

    first_school_idx = 0
    last_school_idx = 0

    # Get urls from the first college to the last one
    for i in range(len(all_urls)):
    	if all_urls[i]['href'] == "http://www.reddit.com/r/aberystwyth/":
    		first_school_idx = i
    	if all_urls[i]['href'] == "http://www.reddit.com/r/yorku/":
    		last_school_idx = i

    	if first_school_idx != 0 and last_school_idx != 0:
    		break;

    # Remove non relevant urls
    all_urls = all_urls[first_school_idx:last_school_idx + 1]

    parse_text(all_urls)

def main():
    scrape()

if __name__ == "__main__":
    main()
