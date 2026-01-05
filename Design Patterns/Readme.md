<h1>Design Patterns</h1>
<ul>
  <li>What is Design Pattern? and What are 3 types of Design Patterns?(Creational, Structural, Behavioral)</li>
  <li>ChatGpt link : <a href="https://chatgpt.com/share/695b647f-3770-8006-9a2f-b168bad82ed2">ChatGPT Explanation</a>
  </li>
</ul>

<h2>Creational Design Patterns</h2>
<h4>1. Singleton Pattern</h4>
<ul>
  <li>Singleton Pattern ensures that a class can have only ONE object (instance) in the entire application. Everyone uses the same object — no duplicates allowed.</li>
  <li>Mostly used where we need Security and Consistency. Example Bank Locker System, where there is only ONE locker room in the bank. Everyone uses that same locker room. You cannot create your own locker room. You can only access the same one. That locker room = Singleton Object</li>
  <li>ChatGpt link : <a href="https://chatgpt.com/share/695b7da6-4710-8006-81c1-413f4498a9a0">ChatGPT Explanation</a></li>
  <li>
    Code Example (Class) :
    <pre><code>
    let instance;
    class SingletonShoppingBag {
        constructor() {
            // If instance already exists, just return it
            if (instance) {
                return instance;
            }
            // First time creation
            this.bag = [];
            instance = this;
        }

        addItem(item) {
            this.bag.push(item);
        }

        getBag() {
            return this.bag;
        }
    };

// Export the SAME frozen instance
export const singletonShoppingInstance = Object.freeze(new SingletonShoppingBag());
</code></pre>

  </li>
  <li>
    Code Example (Object) :
    <pre><code>
    let shopping = [];   // Private data (not accessible directly)

    const ShoppingBag = {
        getBag: () => console.log(shopping),
        addItem: (item) => shopping.push(item),
    };

    // Export frozen object to prevent modification
    export const singletonShoppingObject = Object.freeze(ShoppingBag);
    </code></pre>

  </li>
</ul>
