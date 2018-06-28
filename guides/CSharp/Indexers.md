**Indexers**

Indexer in C# is used to provide class a collection like semantics. It is similar to properties in terms of the syntax. 

Indexer in C# have getter and setter accessor.

Example:

**Following example demonstrate how to create indexer in HttpCookie class:**

public class HttpCookie
{
  private Dictionary<string, string> _dictionary = new Dictionary<string, string>();
  
  public string this[string key]
  {
    get
    {
      return _dictionary[key];
    }
    set
    {
      _dictionary[key] = value;
    }
  }
}

**Following example demonstrate how to use indexer:**

var httpCookie = new HttpCookie();
httpCookie["username"] = "Neel Shah";
Console.WriteLine(httpCookie["username"]);//output - Neel Shah

