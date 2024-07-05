use rand::Rng;

pub fn shuffled_list(length: u32) -> Vec<u32> {
    let mut list = (0..length).collect::<Vec<u32>>();
    let mut current_index = list.len() - 1;
    let mut rng = rand::thread_rng();

    while current_index > 0 {
        let random_index = rng.gen_range(0..current_index);

        list.swap(current_index, random_index);
        current_index -= 1;
    }

    list
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_shuffled_list_length() {
        let length = 10;
        let shuffled = shuffled_list(length);

        assert_eq!(shuffled.len(), length as usize);
    }

    #[test]
    fn test_shuffled_list_uniqueness() {
        let length = 10;
        let shuffled = shuffled_list(length);
        let mut unique = shuffled.clone();
        unique.sort_unstable();
        unique.dedup();
        assert_eq!(unique.len(), length as usize);
        assert_eq!(unique, (0..length).collect::<Vec<u32>>());
    }

    #[test]
    fn test_shuffled_list_shuffling() {
        let length = 10;
        let shuffled = shuffled_list(length);
        let original = (0..length).collect::<Vec<u32>>();
        assert_ne!(shuffled, original);
    }
}
