const useSendDeviceDiagnosticAnswers = (payload: any) => {
  const [loading, setLoading] = useState(true);

  const finishChecklist = useCallback(async () => {
    try {
      const response = await sendDeviceDiagnosticAnswers(payload)
      return response
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    finishChecklist,
  };
};

export default useSendDeviceDiagnosticAnswers;
