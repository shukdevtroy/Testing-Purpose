use std::collections::HashMap;

fn main() {
    let mut scores: HashMap<&str, u32> = HashMap::new();
    scores.insert("blue", 10);
    println!("{:?}", scores.get("blue"));
}
