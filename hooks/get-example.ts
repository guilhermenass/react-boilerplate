// o foco aqui não é fazer o código funcionar. É só para criar um padrão de como criar um hook que faz uma chamada GET

const useFetchQuestions = () => {
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      return await fetchQuestions(); // chamada da api
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    fetchData,
  };
};

export default useFetchQuestions;
