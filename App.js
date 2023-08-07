import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ajax from "./src/ajax";
import { useState, useEffect } from "react";
import DealsList from "./src/components/DealsList";
import DealDetail from "./src/components/DealDetail";
import SearchBar from "./src/components/SearchBar";

export default function App() {
  const [deals, setDeals] = useState([]);
  const [currentDeal, setCurrentDeal] = useState("");
  const [searchResults, setSearchResult] = useState([]);
  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const fetchedDeals = await ajax.fetchInitialDeals();
        setDeals(fetchedDeals);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching deals:", error);
      }
    };
    fetchDeals();
  }, []);

  const currentDealData = () => {
    return deals.find((deal) => deal.key == currentDeal);
  };

  const searchDeals = async (search) => {
    if (search) {
      const searchData = await ajax.fetchDealSearchResults(search);
      setSearchResult(searchData);
      console.log(searchData)
    } else {
      setSearchResult([]);
    }
  };

  return (
    <>
      {currentDeal && (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <DealDetail
            deal={currentDealData()}
            onItemPress={() => setCurrentDeal(null)}
          />
        </View>
      )}
      {deals.length > 0 && !currentDeal && searchResults.length ===0 &&(
        <View style={styles.container}>
          <SearchBar searchDeals={searchDeals} />
          <StatusBar style="auto" />
          <DealsList onItemPress={(id) => setCurrentDeal(id)} deals={deals} />
        </View>
      )}

     {deals.length > 0 && !currentDeal && searchResults.length !=0 && (
        <View style={styles.container}>
          <SearchBar searchDeals={searchDeals} />
          <StatusBar style="auto" />
          <DealsList onItemPress={(id) => setCurrentDeal(id)} deals={searchResults} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontSize: 20,
    marginTop: 40,
  },
});
